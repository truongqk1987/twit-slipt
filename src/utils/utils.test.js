import { splitMessage } from './utils';

it('Test splitMessage will return message when message length < 50 chars', () => {
  const message = "I love You";
  const messageParts = splitMessage(message);
  expect(messageParts).toEqual(["I love You"]);
});


it('Test splitMessage will return error when existed a word more than 50 chars', () => {
  try {
    const message = "I love You 123456789012345678901234567890123456789012345678901";
    splitMessage(message);
  }
  catch (error) {
    expect(error.message).toEqual("Your input contains a word more than 50 characters");
  }
});

it('Test splitMessage will return parts - Firstly, try with example test', () => {
  const message = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
  const messageParts = splitMessage(message);
  expect(messageParts[0]).toEqual("1/2 I can't believe Tweeter now supports chunking");
  expect(messageParts[1]).toEqual("2/2 my messages, so I don't have to do it myself.");
});

it('Test splitMessage will return parts - Secondly, try with longer text', () => {
  const message = "We want to see your command of core web technologies: HTML, CSS, JavaScript. The most critical part of this assignment is the message splitting functionality; so this should be in plain Javascript without the use of libraries. The rest of the application may make use of utility libraries and frameworks.";
  const messageParts = splitMessage(message);
  expect(messageParts[0]).toEqual("1/7 We want to see your command of core web");
  expect(messageParts[1]).toEqual("2/7 technologies: HTML, CSS, JavaScript. The most");
  expect(messageParts[2]).toEqual("3/7 critical part of this assignment is the message");
  expect(messageParts[3]).toEqual("4/7 splitting functionality; so this should be in");
  expect(messageParts[4]).toEqual("5/7 plain Javascript without the use of libraries. The");
  expect(messageParts[5]).toEqual("6/7 The rest of the application may make use of utility");
  expect(messageParts[6]).toEqual("7/7 libraries and frameworks.");
});

it('Test splitMessage will return parts - Thirdly, try with example test with multi space', () => {
  const message = "I can't believe Tweeter now supports chunking my messages,                                    so I don't         have to do          it myself.";
  const messageParts = splitMessage(message);
  expect(messageParts[0]).toEqual("1/2 I can't believe Tweeter now supports chunking");
  expect(messageParts[1]).toEqual("2/2 my messages, so I don't have to do it myself.");
});

it('Test splitMessage will return parts - Fourthly, try with example test with multi line break', () => {
  const message = "I can't believe Tweeter now supports chunking my messages,                                    so I don't   \n \n      have to do          it myself.";
  const messageParts = splitMessage(message);
  expect(messageParts[0]).toEqual("1/2 I can't believe Tweeter now supports chunking");
  expect(messageParts[1]).toEqual("2/2 my messages, so I don't have to do it myself.");
});
