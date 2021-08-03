export default function reverse(x: number): number {
  const result = +Math.abs(x)
    .toString()
    .split('')
    .reverse()
    .reduce((acc, n) => acc + n, x >= 0 ? '' : '-');

  if (result < (-2) ** 31 || result > 2 ** 31 - 1) return 0;

  return result;
}
