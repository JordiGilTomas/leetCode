export default function convert(s: string, numRows: number): string {
  let isAsc = true;
  let row = 0;

  if (numRows === 1) return s;

  const result: string[][] = [];

  for (let i = 0; i < s.length; i++) {
    result[row] = [...(result[row] ?? []), s[i]];

    if (isAsc) {
      row += 1;
      if (row === numRows - 1) isAsc = false;
    } else {
      row -= 1;
      if (row === 0) isAsc = true;
    }
  }
  return result.flat().join('');
}
