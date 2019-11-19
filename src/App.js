import React, { useCallback, useState } from 'react';
import injectSheet from 'react-jss'

import { splitMessage, checkExistedWordOverAcceptedChars } from './utils';

import Input from './components/TwitterTextField';
import Button from './components/TwitterSendButton';
import ErrorDisplay from './components/ErrorDisplay';

const stylesheet = {
  App: {
    padding: '1rem',
    fontFamily: '"Segoe UI",Arial,sans-serif',
    fontSize: '1rem',
  },
  TwitterForm: {
    display: 'flex',
    flexFlow: 'column',
  }
}

const App = ({classes}) => {
  const [inputMessage, setInputMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [listTweetedMessages, setListTweetedMessages] = useState([]);

  const onInputMessageChanged = useCallback((event) => {
    const changedInputMessage = event.target.value;
    try {
      checkExistedWordOverAcceptedChars(changedInputMessage);
      setErrorMessage('');
    } catch(error) {
      setErrorMessage(error.message)
    } finally {
      setInputMessage(changedInputMessage);
    }
  }, []);

  const sendMessage = useCallback((event) => {
    const messageSentParts = splitMessage(inputMessage);
    listTweetedMessages.push({
      inputMessage,
      messageSentParts,
    })
    setListTweetedMessages(listTweetedMessages);
  }, [inputMessage, listTweetedMessages]);

  
  return (
    <div className={classes.App}>
      <ErrorDisplay errorMessage={errorMessage}></ErrorDisplay>,
      <div className={classes.TwitterForm}>
        <Input onChange={onInputMessageChanged} value={inputMessage}/>
        <Button onClick={sendMessage} />
      </div>
    </div>
  );
}

export default injectSheet(stylesheet)(App);
