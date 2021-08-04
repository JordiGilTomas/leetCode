import isPalindrome from '../Exercises/009_palindrome_number';

describe('Given an integer x, return true if x is palindrome integer', () => {
  let x: number;
  let expected: boolean;

  it('121', () => {
    x = 121;
    expected = true;
    expect(isPalindrome(x)).toBe(expected);
  });

  it('-121', () => {
    x = -121;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it('10', () => {
    x = 10;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it('-101', () => {
    x = -101;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it('', () => {
    x = null;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });
});
