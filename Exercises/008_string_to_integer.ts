export default function myAtoi(s: string): number {
  let result = '';

  const trimmed = s.trim();

  for (let i = 0; i < trimmed.length; i++) {
    if (Number.isInteger(+result) && result !== '' && trimmed[i] === ' ') {
      return +result;
    }

    if (result.length && trimmed[i] === ' ') return 0;

    if (trimmed[i] !== ' ') {
      if (result.length && Number.isNaN(+trimmed[i])) {
        return Number.isNaN(+result)
          ? 0
          : Math.min(Math.max(+result, (-2) ** 31), 2 ** 31 - 1);
      }

      result = `${result}${trimmed[i]}`;
    }
  }

  return Number.isNaN(+result)
    ? 0
    : Math.min(Math.max((-2) ** 31, +result), 2 ** 31 - 1);
}
