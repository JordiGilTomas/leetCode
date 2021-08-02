export default function longestPalindrome(s: string): string {
  let len = s.length - 1;

  while (len > 0) {
    for (let i = 0; i < s.length - len; i++) {
      let l = 0;

      while (l <= len) {
        const start = l + i;
        const end = len - l + i;

        if (s[start] !== s[end]) {
          break;
        }

        if (len - l === 1) {
          return s.substring(i, i + len + 1);
        }

        l += 1;
      }
    }
    len -= 1;
  }
  return s[0];
}
