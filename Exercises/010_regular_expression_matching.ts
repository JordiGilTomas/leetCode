export default function isMatch(s: string, p: string): boolean {
  if (![...p].some((l) => l === '*' || l === '.')) {
    return s === p;
  }

  let index = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') continue;
    if (p[i + 1] === '*') {
      if (i + 1 === p.length - 1 && index + 1 === s.length - 1) return true;
      while (p[i] === s[index] && index <= i + 1) {
        index += 1;
      }
      continue;
    }
    if (p[i] === '.') {
      index += 1;
      if (index === s.length) return true;
      continue;
    }

    if (p[i] === s[index]) {
      index += 1;
      if (index === s.length) return true;
      continue;
    }
    if (index === s.length) return true;
  }
  return false;
}
