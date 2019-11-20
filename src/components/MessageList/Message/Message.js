import React from 'react';

const Message = ({ inputMessage, messageSentParts}) => (
  <li>{inputMessage}
    <ul>
      { messageSentParts.map((messageSentPart) => {
        return <li>{messageSentPart}</li>
      })}
    </ul>
  </li>
)

export default Message;