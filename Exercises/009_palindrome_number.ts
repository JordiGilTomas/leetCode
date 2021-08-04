export default function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x !== null && x >= 0 && x < 10) return true;

  const digits = Math.round(Math.log10(x));

  for (let i = digits - 1; i >= 0; i--) {
    const actualDigit = Math.trunc(x / 10 ** i) % 10;
    const reversedDigit = Math.floor((x / 10 ** (digits - i)) % 10);

    if (actualDigit !== reversedDigit) return false;
    if (i === Math.round(digits / 2)) return true;
  }
  return false;
}

console.log(isPalindrome(9999));
