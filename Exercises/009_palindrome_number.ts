export default function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x !== null && x >= 0 && x < 10) return true;

  for (let i = Math.floor(Math.log10(x)); i >= 0; i--) {
    if (
      Math.floor(x / 10 ** i) % 10 !==
      Math.floor((x / 10 ** (Math.floor(Math.log10(x)) - i)) % 10)
    )
      return false;
    if (i === Math.floor(Math.floor(Math.log10(x)) / 2)) return true;
  }
  return false;
}
