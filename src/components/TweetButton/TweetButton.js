import React from 'react';
import injectSheet from 'react-jss'

const stylesheet = {
  TweetButton: {
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
      },
      '&:disabled': {
        background: 'grey',
        cursor: 'not-allowed',
      }
    }
  }
}

const TweetButton = ({ classes, onClick, disabled }) => 
  <div className={classes.TweetButton}>
    <button onClick={onClick} disabled={disabled}>Tweet</button>
  </div>;

export default injectSheet(stylesheet)(TweetButton);