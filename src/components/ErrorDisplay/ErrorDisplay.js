
import React from 'react';
import injectSheet from 'react-jss'

const stylesheet = {
  ErrorDisplay: {
    color: 'red',
  }
}

const ErrorDisplay = ({errorMessage, classes}) => errorMessage ?
  <div className={classes.ErrorDisplay}>{errorMessage}</div> : null;

export default injectSheet(stylesheet)(ErrorDisplay);