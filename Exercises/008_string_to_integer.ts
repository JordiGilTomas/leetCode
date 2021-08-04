export default function myAtoi(s: string): number {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      if (result.length && Number.isNaN(+s[i])) {
        return Number.isNaN(+result) ? 0 : +result;
      }

      if (!result.length && s[i] === '-') result = `${result}${s[i]}`;
      else if (!result.length && Number.isNaN(+s[i]) && s[i] !== '+') return 0;
      else result = `${result}${s[i]}`;
    }
  }

  return Number.isNaN(+result)
    ? 0
    : Math.min(Math.max((-2) ** 31, +result), 2 ** 31 - 1);
}
