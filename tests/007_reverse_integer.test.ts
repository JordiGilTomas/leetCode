import reverse from "../exercises/007_reverse_integer";

let x: number;
let expected: number;
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1],
// then return 0.
describe("Given a signed 32-bit integer x, return x with its digits reversed", () => {
  it("123", () => {
    x = 123;
    expected = 321;
    expect(reverse(x)).toBe(expected);
  });

  it("-123", () => {
    x = -123;
    expected = -321;
    expect(reverse(x)).toBe(expected);
  });

  it("120", () => {
    x = 12;
    expected = 21;
    expect(reverse(x)).toBe(expected);
  });

  it("0", () => {
    x = 0;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });

  it("1534236469", () => {
    x = 1534236469;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });

  it("1563847412", () => {
    x = 1563847412;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });

  it("2147483647", () => {
    x = 2147483647;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });

  it("1463847412", () => {
    x = 1463847412;
    expected = 2147483641;
    expect(reverse(x)).toBe(expected);
  });

  it("2**34+1", () => {
    x = 2 ** 34 + 1;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });

  it("-64638474221", () => {
    x = -6463847422;
    expected = 0;
    expect(reverse(x)).toBe(expected);
  });
});
