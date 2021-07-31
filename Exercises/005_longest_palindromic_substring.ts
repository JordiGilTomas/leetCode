export default function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  if (s.length === 2 && s[0] !== s[1]) return s[0];

  let left = 0;
  let right = s.length;

  let found: string;
  let found2: string;
  let found3: string;

  while (left < right) {
    const sub = s.substring(left, right);
    const subReversed = sub.split('').reverse().join('');

    if (sub === subReversed) {
      found = sub;
      break;
    }
    right -= 1;
    left += 1;
  }

  right = s.length;
  left = 0;

  while (left < right) {
    const sub = s.substring(left, right);
    const subReversed = sub.split('').reverse().join('');
    if (sub === subReversed) {
      found2 = sub;
      break;
    }
    left += 1;
  }

  left = 0;
  while (left < right) {
    const sub = s.substring(left, right);
    const subReversed = sub.split('').reverse().join('');
    if (sub === subReversed) {
      found3 = sub;
      break;
    }
    right -= 1;
  }

  return [found ?? '', found2 ?? '', found3 ?? ''].reduce(
    (acc, string) => (string.length > acc.length ? string : acc),
    '',
  );
}
