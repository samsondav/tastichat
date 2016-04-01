import MessageRecord from '../store/MessageRecord';

const serverPublishedMessage = message => {
  const messageRecord = new MessageRecord(message);

  return {
    type: 'SERVER_PUBLISHED_MESSAGE',
    messageRecord,
  };
};

export default serverPublishedMessage;
