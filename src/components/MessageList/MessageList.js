import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => (
  <ul>
    { messages.map(message => <Message {...message} />)}
  </ul>
);

export default MessageList;