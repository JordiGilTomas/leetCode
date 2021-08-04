export default function reverse(x: number): number {
  const reversed = [...Math.abs(x).toString()].reverse();
  if (reversed.length > 10) return 0;

  if (reversed.length === 10 && +reversed[0] > 2) return 0;

  if (reversed.length === 10 && +reversed[0] === 2) {
    if (+reversed.slice(1, 10).join('') > (x >= 0 ? 147483646 : 147483647)) {
      return 0;
    }
  }
  return +reversed.reduce((acc, n) => acc.concat(n), x >= 0 ? '' : '-');
}

reverse(6463847422);
