import React, { useCallback, useState } from 'react';
import injectSheet from 'react-jss'

import { splitMessage, checkExistedWordOverAcceptedChars } from './utils';

import MessageInput from './components/MessageInput';
import TweetButton from './components/TweetButton';
import MessageError from './components/MessageError';
import MessageList from './components/MessageList';

const stylesheet = {
  App: {
    padding: '1rem',
    fontFamily: '"Segoe UI",Arial,sans-serif',
    fontSize: '1rem',
    display: 'flex',
    flexFlow: 'column',
  },
  TwitterBottom: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '0.5rem',
  }
}

const App = ({classes}) => {
  const [inputMessage, setInputMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [tweetedMessages, setTweetedMessages] = useState([]);

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
    try {
      const messageSentParts = splitMessage(inputMessage);
      const updatedTweetedMessages = [...tweetedMessages];
      updatedTweetedMessages.push({
        inputMessage,
        messageSentParts,
      })
      setTweetedMessages(updatedTweetedMessages);
    } catch(error) {
      setErrorMessage(error.message)
    }
  }, [inputMessage, tweetedMessages]);

  
  return (
    <div className={classes.App}>
      <MessageInput onChange={onInputMessageChanged} value={inputMessage}/>
      <div className={classes.TwitterBottom}>
        <MessageError message={errorMessage}></MessageError>
        <TweetButton onClick={sendMessage} disabled={!!errorMessage || !inputMessage}/>
      </div>
      <MessageList messages={tweetedMessages} />
    </div>
  );
}

export default injectSheet(stylesheet)(App);
