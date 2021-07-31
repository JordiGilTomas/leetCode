export default function longestPalindrome(s: string): string {
  if (s[0] === s[s.length - 1] && s === s.split('').reverse().join('')) return s;

  let len = s.length - 1;
  let head = 0;

  while (len > 0) {
    for (let i = 0; i < s.length - len + 1; i++) {
      if (s[i + head] === s[len + i - 1]) {
        const sub = s.substring(i + head, len + i);
        const reversed = sub.split('').reverse().join('');

        if (sub === reversed) {
          return sub;
        }
      }
    }
    len -= 1;
    head = 0;
  }
}
