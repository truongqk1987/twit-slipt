import { ACCEPTED_MAXIMUM_CHARS } from './globalConstants';

export const checkExistedWordOverAcceptedChars = (message) => {
  const regex = new RegExp(`([^\\s]){${ACCEPTED_MAXIMUM_CHARS},}`,'g')
  const matches = message.match(regex);
  if (matches && matches.length > 0) {
    throw new Error('Your input contains a word more than 50 characters'); 
  }
}

export const splitMessage = (message) => {
  return [];
}