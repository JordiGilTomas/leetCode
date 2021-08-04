export default function isPalindrome(x: number): boolean {
  return x === +[...x.toString()].reverse().join('');
}
