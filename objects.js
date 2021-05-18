"use strict";


// 1. countWords
const countWords = phrase => {
  /** Return an object with each word and the no. of times they appear.

  You can assume that `phrase` does not contain any punctuation and that
  each word is separated with a space.

  Arguments:
      phrase (str): A string of space-separated words

  Returns:
      Object: {word: # of times word appears in `phrase`}
  */

    const word_counts = {};

    for (const word of phrase.split(' ')) {
      if (!word_counts[word]) {
        word_counts[word] = 1;
      } else {
        word_counts[word] += 1;
      }
    }
    return word_counts;
};


// 2. getMelonsAtPrice
const getMelonsAtPrice = price => {
    /** Return the array of melons that cost `price`.

    Arguments:
        price (Number)

    Returns:
        arr: Array of melons that cost `price`
        None: If there are no melons that cost `price`
  */

  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  if (!melonPrices[price]) {
    return;
  }
  return melonPrices[price];
}
//console.log(countWords('testing testing one two three'))
//console.log(getMelonsAtPrice(2.95))