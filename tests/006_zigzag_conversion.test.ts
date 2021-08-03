import convert from '../Exercises/006_zigzag_conversion';

let s: string;
let numRows: number;
let expected: string;

describe('The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:', () => {
  // P   A   H   N
  //  A P L S I I G
  //   Y   I   R

  it('PAYPALISHIRING', () => {
    s = 'PAYPALISHIRING';
    numRows = 3;
    expected = 'PAHNAPLSIIGYIR';
    expect(convert(s, numRows)).toStrictEqual(expected);
  });

  it('PAYPALISHIRING', () => {
    s = 'PINALSIGYAHRPI';
    numRows = 4;
    expected = 'A';
    expect(convert(s, numRows)).toStrictEqual(expected);
  });

  it('A', () => {
    s = 'A';
    numRows = 1;
    expected = 'A';
    expect(convert(s, numRows)).toStrictEqual(expected);
  });
});
