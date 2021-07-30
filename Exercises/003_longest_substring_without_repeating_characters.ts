function lengthOfLongestSubstring(s: string): number {
  let result = '';
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
