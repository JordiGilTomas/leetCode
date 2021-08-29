import isMatch from '../Exercises/010_regular_expression_matching';

describe('Given an input string s and a pattern p, implement regular expression matching with support for "." and "*"', () => {
  /*
    where:
        '.' Matches any single character.
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

  it('ab .*c', () => {
    s = 'ab';
    p = '.*c';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('abcd d*', () => {
    s = 'abcd';
    p = 'd*';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aaa a*a', () => {
    s = 'aaa';
    p = 'a*a';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aaa ab*a*c*a', () => {
    s = 'aaa';
    p = 'ab*a*c*a';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aaa .*', () => {
    s = 'aaa';
    p = '.*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('a ab*a', () => {
    s = 'a';
    p = 'ab*a';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('a ab*', () => {
    s = 'a';
    p = 'ab*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('bbbba .*a*a', () => {
    s = 'bbbba';
    p = '.*a*a';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('a .*..a*', () => {
    s = 'a';
    p = '.*..a*';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('ab .*..', () => {
    s = 'ab';
    p = '.*..';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('ab .*..c*', () => {
    s = 'ab';
    p = '.*..c*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('a a.', () => {
    s = 'a';
    p = 'a.';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aasdfasdfasdfasdfas aasdf.*asdf.*asdf.*asdf.*s', () => {
    s = 'aasdfasdfasdfasdfas';
    p = 'aasdf.*asdf.*asdf.*asdf.*s';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('bbba .*b', () => {
    s = 'bbba';
    p = '.*b';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('b ab*b', () => {
    s = 'b';
    p = 'ab*b';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aba .*.*', () => {
    s = 'aba';
    p = '.*.*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aab b.*', () => {
    s = 'aab';
    p = 'b.*';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aabcbcbcaccbcaabc .*a*aa*.*b*.c*.*a*', () => {
    s = 'aabcbcbcaccbcaabc';
    p = '.*a*aa*.*b*.c*.*a*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('acaabbaccbbacaabbbb a*.*b*.*a*aa*a*', () => {
    s = 'acaabbaccbbacaabbbb';
    p = 'a*.*b*.*a*aa*a*';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('aaa ab*a', () => {
    s = 'aaa';
    p = 'ab*a';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('bbab b*a*', () => {
    s = 'bbab';
    p = 'b*a*';

    expected = false;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('baabbbaccbccacacc c*..b*a*a.*a..*c', () => {
    s = 'baabbbaccbccacacc';
    p = 'c*..b*a*a.*a..*c';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('abcaaaaaaabaabcabac .*ab.a.*a*a*.*b*b*', () => {
    s = 'abcaaaaaaabaabcabac';
    p = '.*ab.a.*a*a*.*b*b*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });

  it('cbaacacaaccbaabcb c*b*b*.*ac*.*bc*a*', () => {
    s = 'cbaacacaaccbaabcb';
    p = 'c*b*b*.*ac*.*bc*a*';

    expected = true;
    expect(isMatch(s, p)).toBe(expected);
  });
});
