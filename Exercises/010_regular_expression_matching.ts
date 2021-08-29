export default function isMatch(s: string, p: string): boolean {
  if (p === '.*') return true;

  if (![...p].some((l) => l === '*' || l === '.')) {
    return s === p;
  }

  let indexS = 0;
  let bypass = false;
  let fullBypass = false;
  const bufferBypass = {};
  let accPattern = '';

  for (let indexP = 0; indexP < p.length; indexP++) {
    const subP = p.substring(indexP);
    if (subP[0] === '*') {
      if (indexS === s.length && indexP === p.length - 1) {
        return true;
      }
      continue;
    }

    const nextDot = subP.indexOf('.');
    const nextAsterisk = subP.indexOf('*');

    // Caso sólo con un punto
    if (
      nextDot !== -1 &&
      (nextAsterisk === -1 ||
        (nextDot < nextAsterisk && nextAsterisk - nextDot !== 1))
    ) {
      if (indexP === p.length - 1 && indexS === s.length - 1) {
        return true;
      }

      const pattern = subP.substring(0, nextDot);
      if (bypass) {
        const indexBypass = s.substring(indexS).indexOf(pattern);
        if (indexBypass === -1) {
          return false;
        }
        indexS += indexBypass + pattern.length;
        indexP += pattern.length;
        if (indexP === p.length - 1 && indexS === s.length - 1) {
          return true;
        }
      }
      if (s.substring(indexS, pattern.length) === pattern || !pattern) {
        indexS += pattern.length + 1;
        indexP += pattern.length;
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
        if (indexS > s.length) {
          return false;
        }
        continue;
      } else {
        return false;
      }
    }

    // Caso con .*
    if (nextDot !== -1 && nextAsterisk - nextDot === 1) {
      if (fullBypass) {
        indexS += s.substring(indexS).indexOf(subP[0]);
        bypass = false;
      }
      bufferBypass[subP[0]] ??= 0;
      const pattern = subP.substring(0, nextDot);

      if (pattern.length === 1 && s.substring(indexS, 1) !== pattern[0]) {
        while (
          bufferBypass[subP[0]] > 0 &&
          s.substring(indexS, 1) !== pattern[0]
        ) {
          indexS -= 1;
          bufferBypass[subP[0]] -= 1;
          if (s.substring(indexS, 1) === pattern[0]) {
            indexP += 1;
          }
        }

        if (s.substring(indexS, indexS + 1) !== pattern[0]) {
          return false;
        }
      }

      if (s.substring(indexS).indexOf(pattern) !== -1) {
        indexP += pattern.length + 1;

        if (pattern.length) {
          indexS += pattern.length;
        }
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
        fullBypass = true;
        continue;
      } else {
        return false;
      }
    }
    // Caso letra y *
    if (nextAsterisk !== -1) {
      bypass = true;
      if (fullBypass) {
        indexS += s.substring(indexS).indexOf(subP[0]);
      }

      const pattern = subP.substring(0, nextAsterisk - 1);
      const origin = s.substring(indexS, indexS + pattern.length);

      if (origin !== pattern) {
        accPattern += pattern;
      }

      if (origin !== '' && pattern !== '' && origin === pattern) {
        fullBypass = false;
        indexS += pattern.length;
        Object.entries(bufferBypass).forEach(([k]) => {
          if (k !== subP[0]) delete bufferBypass[k];
        });
      }

      bufferBypass[subP[nextAsterisk - 1]] ??= 0;
      while (s[indexS] === subP[nextAsterisk - 1]) {
        indexS += 1;
        bufferBypass[subP[nextAsterisk - 1]] += 1;
      }
      if (bufferBypass[subP[0]] > 0) {
        Object.entries(bufferBypass).forEach(([k]) => {
          if (k !== subP[0]) delete bufferBypass[k];
        });
      }
      if (s.substring(indexS).indexOf(pattern) !== -1) {
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
      }
      indexP += nextAsterisk;
      if (indexP === p.length - 1 && indexS === s.length) {
        return true;
      }
    }

    // Si ya no hay asterico ni punto
    if (nextAsterisk === -1 && nextDot === -1) {
      if (fullBypass) {
        if (
          s.substring(indexS).indexOf(subP) !== -1 &&
          s[s.length - 1] === p[p.length - 1]
        ) {
          return true;
        }
      }
      if (subP === s.substring(indexS)) {
        return true;
      }

      if (bufferBypass[subP[0]] > 0) {
        while (bufferBypass[subP[0]] >= 0) {
          if (s.substring(indexS) === accPattern + subP) {
            return true;
          }
          bufferBypass[subP[0]] -= 1;
          indexS -= 1;
        }
      }

      if (fullBypass && indexP === p.length - 1) {
        if (s.substring(s.length - 1) !== subP) {
          return false;
        }
      }

      if (fullBypass) continue;

      return false;
    }
  }

  if (indexS === s.length || fullBypass) {
    return true;
  }

  return false;
}
