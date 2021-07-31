import longestPalindrome from '../Exercises/005_longest_palindromic_substring';

describe('Given a string s, return the longest palindromic substring in s', () => {
  let s: string;
  let expected: string;

  it('babad', () => {
    s = 'babad';
    expected = 'bab';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('cbbd', () => {
    s = 'cbbd';
    expected = 'bb';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('a', () => {
    s = 'a';
    expected = 'a';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('ac', () => {
    s = 'ac';
    expected = 'a';
    expect(longestPalindrome(s)).toBe(expected);
  });
});
