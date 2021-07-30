function lengthOfLongestSubstring(s: string): number {
  let result = '';

  if (s.length < 2) return s.length;

  s.split('').reduce((acc, letter, index, array) => {
    if (acc.includes(letter)) {
      if (acc.length >= result.length) {
        result = acc;
      }
      return acc.substring(acc.indexOf(letter) + 1) + letter;
    }

    if (index !== array.length - 1 || acc.length < result.length) {
      return (acc += letter);
    }

    result = acc += letter;
  }, '');

  return result.length;
}

export default lengthOfLongestSubstring;
