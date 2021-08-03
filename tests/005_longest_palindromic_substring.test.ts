import longestPalindrome from '../Exercises/005_longest_palindromic_substring';

describe('Given a string s, return the longest palindromic substring in s', () => {
  let s: string;
  let expected: string;

  it('babad', () => {
    s = 'babad';
    const bothExpected = ['bab', 'aba'];
    expect(bothExpected.includes(longestPalindrome(s)));
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

  it('abb', () => {
    s = 'abb';
    expected = 'bb';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('eabcb', () => {
    s = 'eabcb';
    expected = 'bcb';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('ccd', () => {
    s = 'ccd';
    expected = 'cc';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('abcdbbfcba', () => {
    s = 'abcdbbfcba';
    expected = 'bb';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('aacabdkacaa', () => {
    s = 'aacabdkacaa';
    expected = 'aca';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('bb', () => {
    s = 'bb';
    expected = 'bb';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('ccc', () => {
    s = 'ccc';
    expected = 'ccc';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('a', () => {
    s = 'a';
    expected = 'a';
    expect(longestPalindrome(s)).toBe(expected);
  });

  it('abcda', () => {
    s = 'a';
    expected = 'a';
    expect(longestPalindrome(s)).toBe(expected);
  });
});
