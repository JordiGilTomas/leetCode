import lengthOfLongestSubstring from "../exercises/003_longest_substring_without_repeating_characters";

describe("Given a string s, find the length of the longest substring without repeating characters.", () => {
  test("abcabcdd", () => {
    const s = "abcabcbb";
    const expected = 3; // Explanation: The answer is "abc", with the length of 3.
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("bbbbb", () => {
    const s = "bbbbb";
    const expected = 1; // The answer is "b", with the length of 1.
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("pwwkew", () => {
    const s = "pwwkew";
    const expected = 3; // Explanation: The answer is "wke", with the length of 3.
    // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("empty string", () => {
    const s = "";
    const expected = 0;
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("one space test", () => {
    const s = " ";
    const expected = 1;
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("au", () => {
    const s = "au";
    const expected = 2;
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("dvdf", () => {
    const s = "dvdf";
    const expected = 3;
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
  test("nfpdmpi", () => {
    const s = "nfpdmpi";
    const expected = 5;
    expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
  });
});
