import React from 'react';
import injectSheet from 'react-jss'

import {
  TWITTER_TEXT_FIELD_INIT_ROWS
} from '../../globalConstants';

const stylesheet = {
  TwitterTextField: {
    flexGrow: 1
  }
}

const TwitterTextField = ({classes, onChange}) => (
  <textarea className={classes.TwitterTextField} rows={TWITTER_TEXT_FIELD_INIT_ROWS} 
    onChange={onChange}
  />
)

export default injectSheet(stylesheet)(TwitterTextField);