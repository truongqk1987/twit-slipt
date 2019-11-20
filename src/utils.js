/* eslint-disable no-loop-func */
import { ACCEPTED_MAXIMUM_CHARS } from './globalConstants';

export const checkExistedWordOverAcceptedChars = (message) => {
  const regex = new RegExp(`([\\S]){${ACCEPTED_MAXIMUM_CHARS},}`,'g')
  const matches = message.match(regex);
  if (matches && matches.length > 0) {
    throw new Error('Your input contains a word more than 50 characters'); 
  }
}

export const splitMessage = (inputMessage) => {
  let messageParts = [];

  if (inputMessage.length <= 50) return [ inputMessage ];

  // Error will be caught by the function call splitMessage()
  checkExistedWordOverAcceptedChars(inputMessage);

  let indicator = 0;
  let totalMessageParts;
  let partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';

  let counter = partIndicator.length;
  let startIndex = 0;
  const nonWhiteSpaceWords = inputMessage.split(' ');

  while (messageParts.length !== totalMessageParts) {
    totalMessageParts = messageParts.length;
    indicator = 0;
    startIndex = 0;
    messageParts = [];
    nonWhiteSpaceWords.forEach((word, index) => {
      counter = counter + 1 + word.length // 1 for space between indicator and word
      if (counter > ACCEPTED_MAXIMUM_CHARS) {
        // Pickup a word but it make counter > 56
        // So we will return back this word, and reset counter,
        // The counter should be start equal word.length (which be returned);
        counter = word.length;
        const messagePart = nonWhiteSpaceWords.slice(startIndex, index);
        indicator++;
        partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';
        messageParts.push([partIndicator, ...messagePart].join(' '));
        startIndex = index;
      }
      if (counter === ACCEPTED_MAXIMUM_CHARS) {
        counter = 0;
        const messagePart = nonWhiteSpaceWords.slice(startIndex, index + 1);
        indicator++;
        partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';
        messageParts.push([partIndicator, ...messagePart].join(' '));
        startIndex = index;
  
      }
      if (index === nonWhiteSpaceWords.length -1) {
        // When counter < 50 but don't have any word to check
        // Add it as a final message part;
        const messagePart = nonWhiteSpaceWords.slice(startIndex, index + 1);
        indicator++;
        partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';
        messageParts.push([partIndicator, ...messagePart].join(' '));
        counter = 0;
      }
    })
  }

  return messageParts;
}
