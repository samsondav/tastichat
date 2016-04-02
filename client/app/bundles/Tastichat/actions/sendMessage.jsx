import MessageRecord from '../store/MessageRecord';
import request from 'axios';
import Config from 'lib/Config';

request.defaults.headers.post['Content-Type'] = 'application/json';


// ACTIONS

const sendMessage = (messageRecord) => {
  return {
    type: 'SEND_MESSAGE',
    messageRecord,
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

export default (body, fruit, submitTime = new Date) =>
  dispatch => {
    const messageLocalId = localId++;

    const message = new MessageRecord({
      body,
      fruit,
      sentAt: submitTime,
      localId: messageLocalId,
    });
    dispatch(sendMessage(message));

    // TODO: factor into a request/post library
    return request({
      method: 'POST',
      url: '/api/message.json',
      responseType: 'json',
      headers: {
        'X-CSRF-Token': Config.getCSRFToken(),
      },
      data: {
        message: message.serialize(),
        chat_window_id: Config.getChatWindowId(),
      },
    }).then(res => {
      const canonicalId = res.data.message.id;
      dispatch(serverReceivedMessage(messageLocalId, canonicalId));
    }).catch(err => {
      dispatch(serverRejectedMessage(messageLocalId))
    });
  };
