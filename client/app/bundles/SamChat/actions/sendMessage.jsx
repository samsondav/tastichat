let nextMessageId = 2;

export const sendMessage = (author, body, submitTime = new Date) => {
  return {
    type: 'SEND_MESSAGE',
    id: nextMessageId++,
    author: author,
    body: body,
    timestamp: submitTime,
  }
}
