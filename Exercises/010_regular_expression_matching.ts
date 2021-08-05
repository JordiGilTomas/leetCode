export default function isMatch(s: string, p: string): boolean {
  if (p === '.*') return true;

  if (![...p].some((l) => l === '*' || l === '.')) {
    return s === p;
  }

  let index = 0;
  let need = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      if (index === s.length && i === p.length - 1) return true;
      if ((index === s.length || need === s.length) && i === p.length - 1) {
        return true;
      }
      continue;
    }
    if (p[i + 1] === '*') {
      if (i + 1 === p.length - 1 && index + 1 === s.length - 1) return true;
      while ((p[i] === s[index] || p[i] === '.') && index !== s.length - 1) {
        index += 1;
      }
      continue;
    }
    if (p[i] === '.') {
      index += 1;
      need += 1;
      if ((index === s.length || need === s.length) && i === p.length - 1) {
        return true;
      }
      continue;
    }
    if (p[i] === s[index]) {
      index += 1;
      if (index === s.length && i === p.length - 1) return true;
      continue;
    }
    if (index === s.length) return false;
  }
  return false;
}
