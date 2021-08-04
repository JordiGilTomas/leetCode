import myAtoi from '../Exercises/008_string_to_integer';

let input: string;
let expected: number;

describe('Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer', () => {
  it('42', () => {
    input = '42';
    expected = 42;
    expect(myAtoi(input)).toBe(expected);
  });

  it('(spaces)     -42', () => {
    input = '   -42';
    expected = -42;
    expect(myAtoi(input)).toBe(expected);
  });

  it('4193 with words', () => {
    input = '4193 with words';
    expected = 4193;
    expect(myAtoi(input)).toBe(expected);
  });

  it('words and 987', () => {
    input = 'words and 987';
    expected = 0;
    expect(myAtoi(input)).toBe(expected);
  });

  it('-91283472332', () => {
    input = '-91283472332';
    expected = -2147483648;
    expect(myAtoi(input)).toBe(expected);
  });

  it('-+12', () => {
    input = '-+12';
    expected = 0;
    expect(myAtoi(input)).toBe(expected);
  });

  it('-', () => {
    input = '-';
    expected = 0;
    expect(myAtoi(input)).toBe(expected);
  });

  it('+1', () => {
    input = '+1';
    expected = 1;
    expect(myAtoi(input)).toBe(expected);
  });

  it('21474836460', () => {
    input = '21474836460';
    expected = 2147483647;
    expect(myAtoi(input)).toBe(expected);
  });

  it('   +0 123', () => {
    input = '   +0 123';
    expected = 0;
    expect(myAtoi(input)).toBe(expected);
  });

  it('  +  413', () => {
    input = '  +  413';
    expected = 0;
    expect(myAtoi(input)).toBe(expected);
  });
});
