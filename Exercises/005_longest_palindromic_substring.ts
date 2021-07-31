export default function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  if (s.length === 2 && s[0] !== s[1]) return s[0];

  let left = 0;
  let right = s.length;
  let rightturn = true;

  while (left < right) {
    let sub = s.substring(left, right);
    let subReversed = sub.split('').reverse().join('');

    if (sub.substring(left + 1, right) === subReversed.substring(left, right - 1)) {
      return sub.substring(left + 1, right);
    }
    if (rightturn) {
      right -= 1;
      rightturn = false;
    } else {
      rightturn = true;
      left += 1;
    }
  }
}
