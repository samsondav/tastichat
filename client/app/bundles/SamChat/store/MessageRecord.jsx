import { Record } from 'immutable';

const MessageRecord = Record({
  id: null,
  author: '',
  body: '',
  sentAt: null,
  localId: null,
  state: 'RECEIVED',
});

export default MessageRecord;
