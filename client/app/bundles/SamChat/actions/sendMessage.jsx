import request from 'axios';
import _ from 'lodash';

request.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Get CSRF Token from the DOM.
 *
 * @returns {String} - CSRF Token.
 */
const getCSRFToken = () => {
  const token = _.find(document.querySelectorAll('meta'), ['name', 'csrf-token']);
  return token ? token.content : null;
};

const addMessage = (author, body, submitTime, localId) => {
  return {
    type: 'SEND_MESSAGE',
    author: author,
    body: body,
    sentAt: submitTime,
    localId: localId,
  };
};

const serverReceivedMessage = (localId, id) => {
  return {
    type: 'SERVER_RECEIVED_MESSAGE',
    localId,
    id,
  }
};

const serverRejectedMessage = (localId) => {
  return {
    type: 'SERVER_REJECTED_MESSAGE',
    localId,
  };
};

let localId = 0;

export const sendMessage = (author, body, submitTime = new Date) =>
  dispatch => {
    const messageLocalId = localId++;
    dispatch(addMessage(author, body, submitTime, messageLocalId));

    // TODO: factor into a request/post library
    return request({
      method: 'POST',
      url: '/api/message.json',
      responseType: 'json',
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      },
      data: {
        message: { author, body, sent_at: submitTime.toISOString() },
      },
    }).then(res => {
      const canonicalId = res.data.message.id;
      dispatch(serverReceivedMessage(messageLocalId, canonicalId));
    }).catch(err => {
      dispatch(serverRejectedMessage(messageLocalId))
    });
  };
