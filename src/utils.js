/* eslint-disable no-loop-func */
import { ACCEPTED_MAXIMUM_CHARS } from './globalConstants';
import { __values } from 'tslib';

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
    getValue() { return partIndicator },
    increaseIndicator() {
      indicator++;
      partIndicator = !!totalMessageParts ? `${indicator}/${totalMessageParts}`:'';
    },
  }
}

const MessageParts = () => {
  let parts = [];
  return {
    clear() { parts.length = 0 },
    add(partIndicatorValue, words, startIndexOfWords, endIndexOfWords) { 
      parts.push([
        partIndicatorValue,
        ...words.slice(startIndexOfWords, endIndexOfWords)
      ].join(' '))
    },
    getValue() { return parts },
    length() { return parts.length }
  }
}

export const splitMessage = (inputMessage) => {

  if (inputMessage.length <= 50) return [ inputMessage ];

  // Error will be caught by the function call splitMessage()
  checkExistedWordOverAcceptedChars(inputMessage);

  const nonWhiteSpaceWords = inputMessage.split(' ');

  let totalMessageParts = -1;
  let messageParts = MessageParts();

  while (messageParts.length() !== totalMessageParts) {
    totalMessageParts = messageParts.length();

    // Ensure messageParts is empty for re-calculate
    messageParts.clear();

    let partIndicator = PartIndicator(totalMessageParts);

    let counter = partIndicator.getValue().length;
    let startWordIndex = 0;

    nonWhiteSpaceWords.forEach((word, index) => {
      counter = counter + 1 + word.length // 1 for space between indicator and word
      if (counter > ACCEPTED_MAXIMUM_CHARS) {
        // Pickup a word but it make counter > 56
        // So we will return back this word, and reset counter,
        // The counter should be start equal word.length (which be returned);
        partIndicator.increaseIndicator();
        messageParts.add(partIndicator.getValue(), nonWhiteSpaceWords, startWordIndex, index);

        startWordIndex = index;
        counter = word.length;
      }
      if (counter === ACCEPTED_MAXIMUM_CHARS) {
        counter = 0;
        partIndicator.increaseIndicator();
        messageParts.add(partIndicator.getValue(), nonWhiteSpaceWords, startWordIndex, index + 1);

        counter = 0;
        startWordIndex = index;
      }
      if (index === nonWhiteSpaceWords.length -1) {
        // When counter < 50 but don't have any word to check
        // Add it as a final message part;
        partIndicator.increaseIndicator();
        messageParts.add(partIndicator.getValue(), nonWhiteSpaceWords, startWordIndex, index + 1);

        counter = 0;
        startWordIndex = 0;
      }
    })
  }

  return messageParts.getValue();
}
