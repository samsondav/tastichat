let nextMessageId = 2;

export const sendMessage = (author, body, submitTime = new Date) => {
  return {
    type: 'SEND_MESSAGE',
    id: nextTodoId++,
    author: author,
    body: body,
    timestamp: submitTime,
  }
}
