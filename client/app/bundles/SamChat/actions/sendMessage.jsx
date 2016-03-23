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


let nextMessageId = 2;

const addMessage = (author, body, submitTime) => {
  return {
    type: 'SEND_MESSAGE',
    id: nextMessageId++,
    author: author,
    body: body,
    timestamp: submitTime,
    state: 'SENDING'
  }
}

export const sendMessage = (author, body, submitTime = new Date) => {
  return dispatch => {
    dispatch(addMessage(author, body, submitTime));

    return request({
      method: 'POST',
      url: '/api/message.json',
      responseType: 'json',
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      },
      data: {
        author, body, sent_at: submitTime,
      },
    }).then(res => {
      debugger
    });

  }
}
