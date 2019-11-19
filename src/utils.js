import { ACCEPTED_MAXIMUM_CHARS } from './globalConstants';

export const checkExistedWordOverAcceptedChars = (message) => {
  const regex = new RegExp(`([\\S]){${ACCEPTED_MAXIMUM_CHARS},}`,'g')
  const matches = message.match(regex);
  if (matches && matches.length > 0) {
    throw new Error('Your input contains a word more than 50 characters'); 
  }
}

export const splitMessage = (message) => {
  let result = [];
  checkExistedWordOverAcceptedChars(message);
  const numberOfParts = Math.ceil(message.length / ACCEPTED_MAXIMUM_CHARS);
  alert('doit: ' + (message.length / ACCEPTED_MAXIMUM_CHARS));
  const nonWhiteSpaceWordArray = message.split(' ');
  for (var i = 1; i <= numberOfParts; i++) {
    let part = Array.from(`${i}/${numberOfParts}`);
    let word = nonWhiteSpaceWordArray.shift()
    while (word) {

      if ((part.length + 1 + word.length) <= 50) {
        part = [...part, ' ', ...Array.from(word)];
        word = nonWhiteSpaceWordArray.shift();
      } else {
        nonWhiteSpaceWordArray.unshift(word);
        break;
      }
    }
    result.push(part.join(''));
  }
  return result;
}