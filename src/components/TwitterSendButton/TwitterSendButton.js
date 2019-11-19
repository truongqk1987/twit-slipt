import React from 'react';
import injectSheet from 'react-jss'

const stylesheet = {
  TwitterSendButton: {}
}

const TwitterSendButton = ({ classes, onClick }) => 
  <button onClick={onClick} className={classes.TwitterSendButton}>Tweet</button>;

export default injectSheet(stylesheet)(TwitterSendButton);