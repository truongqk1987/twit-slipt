
import React from 'react';
import injectSheet from 'react-jss'

const stylesheet = {
  MessageError: {
    color: 'red',
    flexGrow: '1',
  }
}

const MessageError = ({message, classes}) => message ?
  <div className={classes.MessageError}>{message}</div> : null;

export default injectSheet(stylesheet)(MessageError);