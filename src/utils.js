/* eslint-disable no-loop-func */
import { ACCEPTED_MAXIMUM_CHARS } from './globalConstants';

export const checkExistedWordOverAcceptedChars = (message) => {
  const regex = new RegExp(`([\\S]){${ACCEPTED_MAXIMUM_CHARS},}`,'g')
  const matches = message.match(regex);
  if (matches && matches.length > 0) {
    throw new Error('Your input contains a word more than 50 characters'); 
  }
}

const PartIndicator = (totalMessageParts) => {
  let indicator = 0;
  let partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';
  return {
    getString() { return partIndicator },
    increaseIndicator() {
      indicator++;
      partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';
    },
  }
}

export const splitMessage = (inputMessage) => {

  if (inputMessage.length <= 50) return [ inputMessage ];

  // Error will be caught by the function call splitMessage()
  checkExistedWordOverAcceptedChars(inputMessage);

  const nonWhiteSpaceWords = inputMessage.split(' ');

  let totalMessageParts = -1;
  let messageParts = [];

  while (messageParts.length !== totalMessageParts) {
    totalMessageParts = messageParts.length;

    // Ensure messageParts is empty for re-calculate
    messageParts.length = 0;

    let partIndicator = PartIndicator(totalMessageParts);

    let counter = partIndicator.getString().length;
    let startWordIndex = 0;

    nonWhiteSpaceWords.forEach((word, index) => {
      counter = counter + 1 + word.length // 1 for space between indicator and word
      if (counter > ACCEPTED_MAXIMUM_CHARS) {
        // Pickup a word but it make counter > 56
        // So we will return back this word, and reset counter,
        // The counter should be start equal word.length (which be returned);
        counter = word.length;
        const messagePart = nonWhiteSpaceWords.slice(startWordIndex, index);
        partIndicator.increaseIndicator();
        messageParts.push([partIndicator.getString(), ...messagePart].join(' '));
        startWordIndex = index;
        
      }
      if (counter === ACCEPTED_MAXIMUM_CHARS) {
        counter = 0;
        const messagePart = nonWhiteSpaceWords.slice(startWordIndex, index + 1);
        partIndicator.increaseIndicator();
        messageParts.push([partIndicator.getString(), ...messagePart].join(' '));
        startWordIndex = index;
      }
      if (index === nonWhiteSpaceWords.length -1) {
        // When counter < 50 but don't have any word to check
        // Add it as a final message part;
        const messagePart = nonWhiteSpaceWords.slice(startWordIndex, index + 1);
        partIndicator.increaseIndicator();
        messageParts.push([partIndicator.getString(), ...messagePart].join(' '));
        counter = 0;
        startWordIndex = 0;
      }
    })
  }

  return messageParts;
}
