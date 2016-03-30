import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer';
import WriteMessageContainer from '../containers/WriteMessageContainer';
import classNames from 'classnames';

export default ({ visible }) => {
  const visibilityClass = visible ? 'page--visible' : 'page--hidden';
  const elementClasses = classNames('chat-window', visibilityClass);

  return (
    <page className={elementClasses}>
      <WriteMessageContainer />
      <MessagesListContainer />
    </page>
  );
};