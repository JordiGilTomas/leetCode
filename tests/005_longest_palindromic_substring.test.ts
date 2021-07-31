import longestPalindrome from '../Exercises/005_longest_palindromic_substring';

describe.only('Given a string s, return the longest palindromic substring in s', () => {
  let s: string;
  let expected: string;

  it('babad', () => {
    s = 'babad';
    let expected = ['bab', 'aba'];
    expect(expected.includes(longestPalindrome(s)));
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
