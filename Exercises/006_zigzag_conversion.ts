export default function convert(s: string, numRows: number): string {
  let isAsc = true;
  let row = 0;
  const result = Array(numRows).fill([]);

  s.split('').forEach((l) => {
    result[row] = [...result[row], l];

    if (numRows === 1) return;

    if (isAsc) {
      row += 1;
      if (row === numRows - 1) isAsc = false;
    } else {
      row -= 1;
      if (row === 0) isAsc = true;
    }
  }, []);

  return result.flat().join('');
}
