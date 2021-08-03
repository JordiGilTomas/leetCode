export default function reverse(x: number): number {
  return +Math.abs(x)
    .toString()
    .split('')
    .reverse()
    .reduce((acc, n) => acc + n, x >= 0 ? '' : '-');
}
