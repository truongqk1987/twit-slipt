const isExistedWordOver50Chars = (message) => {
  const regex = /([^\s]){50,}/g;
  const matches = message.match(regex);
  return matches && matches.length > 0;
}

export const splitMessage = (message) => {
  if (isExistedWordOver50Chars(message)) {
    throw new Error('Your input contains a word more than 50 characters');
  } else {
    return [];
  }
}