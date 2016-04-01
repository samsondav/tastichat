import { Record } from 'immutable';
import _ from 'lodash';

const BasicMessageRecord = Record({
  id: null,
  body: '',
  sentAt: null,
  localId: null,
  state: 'RECEIVED',
  fruit: 'ghost',
});

class MessageRecord extends BasicMessageRecord {
  constructor(object) {
    // don't mutate the argument object
    const rawMessage = _.assign({}, object);

    // sent_at is a string date, sentAt is the date object
    if (rawMessage.sent_at) {
      rawMessage.sentAt = new Date(rawMessage.sent_at);
    }
    delete rawMessage.sent_at;

    super(rawMessage);
  }

  serialize() {
    return {
      sent_at: this.sentAt.toISOString(),
      fruit: this.fruit,
      body: this.body,
    }
  }
}

export default MessageRecord;
