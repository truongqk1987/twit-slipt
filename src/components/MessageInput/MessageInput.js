import React from 'react';
import injectSheet from 'react-jss'

import {
  TWITTER_TEXT_FIELD_INIT_ROWS
} from '../../globalConstants';

const stylesheet = {
  TwitterTextField: {
    flexGrow: 1,
    borderRadius: '1rem',
    padding: '1rem',
    border: '1px solid #e6ecf0',
    lineHeight: '1.25rem',
    background: 'white',
    resize: 'none',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    '&:focus': {
      outline: 'none',
      border: '#A4D9F9',
      boxShadow: '0 0 0 1px #A4D9F9',
    }
  }
}

const TwitterTextField = ({classes, onChange}) => (
  <textarea className={classes.TwitterTextField} rows={TWITTER_TEXT_FIELD_INIT_ROWS} 
    onChange={onChange}
  />
)

export default injectSheet(stylesheet)(TwitterTextField);