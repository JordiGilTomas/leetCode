function lengthOfLongestSubstring(s: string): number {
  let result = '';

  if (s.length < 2) return s.length;

  s.split('').reduce((acc, letter) => {
    if (acc.includes(letter)) {
      if (acc.length > result.length) {
        result = acc;
      }
      return letter;
    } else {
      return (acc += letter);
    }
  }, '');

  return result.length;
}

export default lengthOfLongestSubstring;
