import isMatch from '../Exercises/010_regular_expression_matching';

describe('Given an input string s and a pattern p, implement regular expression matching with support for "." and "*"', () => {
  /*
    where:
        '.' Matches any single character.​​​​
        '*' Matches zero or more of the preceding element.
        The matching should cover the entire input string (not partial).
    */

  let s: string;
  let p: string;
  let expected: boolean;

  it('aa a', () => {
    s = 'aa';
    p = 'a';
    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aa a*', () => {
    s = 'aa';
    p = 'a*';
    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('ab .*', () => {
    s = 'ab';
    p = '.*';
    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aab c*a*b', () => {
    s = 'aab';
    p = 'c*a*b';
    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('mississippi mis*is*p*.', () => {
    s = 'mississippi';
    p = 'mis*is*p*.';
    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('mississippi mis*is*ip*.', () => {
    s = 'mississippi';
    p = 'mis*is*ip*.';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });
});
