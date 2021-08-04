export default function myAtoi(s: string): number {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(+result) && result !== '' && s[i] === ' ') {
      return +result;
    }

    if (result.length && s[i] === ' ') return 0;

    if (s[i] !== ' ') {
      if (result.length && Number.isNaN(+s[i])) {
        return Number.isNaN(+result)
          ? 0
          : Math.min(Math.max(+result, (-2) ** 31), 2 ** 31 - 1);
      }

      result = `${result}${s[i]}`;
    }
  }

  return Number.isNaN(+result)
    ? 0
    : Math.min(Math.max((-2) ** 31, +result), 2 ** 31 - 1);
}
