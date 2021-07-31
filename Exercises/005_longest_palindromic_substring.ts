export default function longestPalindrome(s: string): string {
  if (s.length === 1) return s;

  let left = 0;
  let right = s.length;
  let rightturn = true;

  while (left < right) {
    let sub = s.substring(left, right);
    if (sub === sub.split('').reverse().join('')) {
      return sub;
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

console.log(longestPalindrome('babad'));
