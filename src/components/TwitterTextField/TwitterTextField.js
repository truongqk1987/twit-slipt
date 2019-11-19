import React from 'react';
import {
  TWITTER_TEXT_FIELD_INIT_ROWS
} from '../../globalConstants';

const TwitterTextField = (props) => (
  <textarea rows={TWITTER_TEXT_FIELD_INIT_ROWS} 
    onChange={props.onChange}
  />
)

export default TwitterTextField;