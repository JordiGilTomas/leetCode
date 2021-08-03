export default function convert(s: string, numRows: number): string {
  let isAsc = true;
  let row = 0;

  return s
    .split('')
    .reduce((acc, l) => {
      acc[row] = [...(acc[row] ?? []), l];
      if (numRows === 1) return acc;
      if (isAsc) {
        row += 1;
        if (row === numRows - 1) isAsc = false;
      } else {
        row -= 1;
        if (row === 0) isAsc = true;
      }
      return acc;
    }, [])
    .flat()
    .join('');
}

console.log(convert('AB', 1));
