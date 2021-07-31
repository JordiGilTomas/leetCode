export default function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  if (s.length === 2 && s[0] !== s[1]) return s[0];

  let len = s.length - 1;
  let head = 0;

  while (len > 0) {
    for (let i = 0; i < s.length - len + 1; i++) {
      const sub = s.substring(i + head, len + i);

      const reversed = sub.split('').reverse().join('');
      if (sub === reversed) {
        return sub;
      }
    }
    len -= 1;
    head = 0;
  }
  return '';
}
