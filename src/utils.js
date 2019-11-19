export const splitMessage = (message) => {
  const invalidRegex = /([a-z0-9]){50,}/gi
  const invalidMatchedList = message.match(invalidRegex)
  if (invalidMatchedList && invalidMatchedList.length > 0) {
    throw new Error('Your input contains a word more than 50 characters');
  } else {
    return [];
  }
}