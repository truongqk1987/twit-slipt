import React from 'react';
import injectSheet from 'react-jss'

const stylesheet = {
  TwitterSendButton: {
    paddingTop: '0.5rem',
    textAlign: 'right',
    '&>button': {
      color: 'white',
      padding: '0.5rem 1.25rem',
      border: 'transparent',
      background: '#4AB3F4',
      borderRadius: '100px',
      cursor: 'pointer',
      fontWeight: 'bold',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      width: 'fit-content',
      '&:focus': {
        boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #A4D9F9',
        outline: 'none',
      }
    }
  }
}

const TwitterSendButton = ({ classes, onClick }) => 
  <div className={classes.TwitterSendButton}>
    <button onClick={onClick}>Tweet</button>
  </div>;

export default injectSheet(stylesheet)(TwitterSendButton);