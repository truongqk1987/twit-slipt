import React, { useCallback, useState } from 'react';

import { splitMessage } from './utils';

import Input from './components/TwitterTextField';
import Button from './components/TwitterSendButton';
import ErrorDisplay from './components/ErrorDisplay';

const App = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [listTweetedMessages, setListTweetedMessages] = useState([]);

  const onInputMessageChanged = useCallback((event) => {
    setInputMessage(event.target.value);
  }, []);

  const sendMessage = useCallback((event) => {
    try {
      const messageSentParts = splitMessage(inputMessage);
      listTweetedMessages.push({
        inputMessage,
        messageSentParts,
      })
      setListTweetedMessages(listTweetedMessages);
    } catch(error) {
      setErrorMessage(error.message)
    }
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
