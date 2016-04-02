import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer';
import WriteMessageContainer from '../containers/WriteMessageContainer';

export default () => {
  return (
    <page className="page">
      <WriteMessageContainer />
      <MessagesListContainer />
    </page>
  );
};
