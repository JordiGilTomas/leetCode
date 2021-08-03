import reverse from '../Exercises/007_reverse_integer';

let x: number;
let expected: number;
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1],
// then return 0.
describe('Given a signed 32-bit integer x, return x with its digits reversed', () => {
  it('123', () => {
    x = 123;
    expected = 321;
    expect(reverse(x)).toBe(expected);
  });

  it('-123', () => {
    x = -123;
    expected = -321;
    expect(reverse(x)).toBe(expected);
  });

  it('120', () => {
    x = 12;
    expected = 21;
    expect(reverse(x)).toBe(expected);
  });

  it('0', () => {
    x = 0;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });
});
