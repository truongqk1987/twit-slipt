import React, { useCallback, useState } from 'react';

import { splitMessage, checkExistedWordOverAcceptedChars } from './utils';

import Input from './components/TwitterTextField';
import Button from './components/TwitterSendButton';
import ErrorDisplay from './components/ErrorDisplay';

const App = () => {
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
    
    <div className="App">
      <ErrorDisplay errorMessage={errorMessage}></ErrorDisplay>
      <Input onChange={onInputMessageChanged} value={inputMessage}/>
      <Button onClick={sendMessage} />
    </div>
  );
}

export default App;
