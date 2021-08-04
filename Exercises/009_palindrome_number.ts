export default function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x !== null && x >= 0 && x < 10) return true;

  const digits = Math.round(Math.log10(x));

  for (let i = digits; i >= 0; i--) {
    const actualDigit = Math.floor(
      (x % 10 ** (digits - i + 1)) / 10 ** (digits - i),
    );
    const reversedDigit = Math.floor(
      (((x / 10 ** i) % 10) * 10 ** Math.round(digits - i)) /
        10 ** (digits - i),
    );
    if (i === Math.floor(digits / 2)) return true;
    if (actualDigit !== reversedDigit) return false;
  }
  return false;
}
