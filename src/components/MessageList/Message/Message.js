import React from 'react';
import isEmpty from 'lodash.isempty';

const Message = ({ inputMessage, messageSentParts}) => (
  <li>{inputMessage}
    <ul>
      { 
        !isEmpty(messageSentParts) && messageSentParts.map((messageSentPart) => {
          return <li>{messageSentPart}</li>
        })
      }
    </ul>
  </li>
)

export default Message;