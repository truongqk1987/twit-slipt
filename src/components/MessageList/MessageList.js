import React from 'react';
import isEmpty from 'lodash.isempty';

import Message from './Message';

const MessageList = ({ messages }) => !isEmpty(messages) &&
  <ul>
    { messages.map(message => <Message {...message} />)}
  </ul>;

export default MessageList;