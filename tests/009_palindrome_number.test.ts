import isPalindrome from "../exercises/009_palindrome_number";

describe("Given an integer x, return true if x is palindrome integer", () => {
  let x: number;
  let expected: boolean;

  it("121", () => {
    x = 121;
    expected = true;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("-121", () => {
    x = -121;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("10", () => {
    x = 10;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("-101", () => {
    x = -101;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("", () => {
    x = null;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("0", () => {
    x = 0;
    expected = true;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("9999", () => {
    x = 9999;
    expected = true;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("11", () => {
    x = 11;
    expected = true;
    expect(isPalindrome(x)).toBe(expected);
  });

  it("100", () => {
    x = 100;
    expected = false;
    expect(isPalindrome(x)).toBe(expected);
  });
});
