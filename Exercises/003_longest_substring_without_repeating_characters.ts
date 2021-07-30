function lengthOfLongestSubstring(s: string): number {
  let result = '';

  if (s.length < 2) return s.length;

  s.split('').reduce((acc, letter, index, array) => {
    if (acc.includes(letter)) {
      if (acc.length >= result.length) {
        result = acc;
      }
      return (acc = acc.substring(acc.indexOf(letter) + 1) + letter);
    } else {
      if (index === array.length - 1) {
        result = acc += letter;
      } else {
        return (acc += letter);
      }
    }
  }, '');

  return result.length;
}

export default lengthOfLongestSubstring;
