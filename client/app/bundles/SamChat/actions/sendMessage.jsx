import request from 'axios';
import _ from 'lodash';

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
    timestamp: submitTime,
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

let localId = 0;

export const sendMessage = (author, body, submitTime = new Date) =>
  dispatch => {
    const messageLocalId = localId++;
    dispatch(addMessage(author, body, submitTime, messageLocalId));

    return request({
      method: 'POST',
      url: '/api/message.json',
      responseType: 'json',
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      },
      data: {
        message: { author, body, sent_at: submitTime },
      },
    }).then(res => {
      const canonicalId = res.data.message.id;
      dispatch(serverReceivedMessage(messageLocalId, canonicalId));
    });
  };
