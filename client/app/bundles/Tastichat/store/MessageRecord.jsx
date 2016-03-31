import { Record } from 'immutable';

const MessageRecord = Record({
  id: null,
  body: '',
  sentAt: null,
  localId: null,
  state: 'RECEIVED',
  fruit: 'ghost',
});

export default MessageRecord;
