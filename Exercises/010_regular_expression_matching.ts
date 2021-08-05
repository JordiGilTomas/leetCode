export default function isMatch(s: string, p: string): boolean {
  if (![...p].some((l) => l === '*' || l === '.')) {
    return s === p;
  }

  let index = 0;

  for (let i = 0; i < p.length; i++) {
    if (i === p.length - 1 && index === s.length) {
      return false;
    }
    if (p[i] === '*') continue;
    if (p[i + 1] === '*') {
      if (p[i] === '.') return true;
      while (p[i] === s[index]) {
        index += 1;
      }
      if (index === s.length) return true;
      continue;
    }
    if (p[i] === '.') {
      index += 1;
      continue;
    }

    if (p[i] === s[index]) {
      if (index + 1 === s.length) return true;
      index += 1;
      continue;
    }

    if (p[i] !== s[index]) return false;

    if (index === s.length) return true;
  }
  return false;
}

console.log(isMatch('ab', '.*'));
