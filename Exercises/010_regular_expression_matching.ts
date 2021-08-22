export default function isMatch(s: string, p: string): boolean {
  if (p === '.*') return true;

  if (![...p].some((l) => l === '*' || l === '.')) {
    return s === p;
  }

  let indexS = 0;
  let bypass = false;
  const bufferBypass = {};

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
      bufferBypass[subP[0]] ??= 0;
      const pattern = subP.substring(0, nextDot);
      if (s.substring(indexS).indexOf(pattern) !== -1) {
        indexP += pattern.length + 1;
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
        bypass = true;
        continue;
      } else {
        return false;
      }
    }
    // Caso letra y *
    if (nextAsterisk !== -1) {
      const pattern = subP.substring(0, nextAsterisk - 1);
      const origin = s.substring(indexS, indexS + pattern.length);
      if (origin !== '' && pattern !== '' && origin === pattern) {
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
        // indexS += pattern.length + 1;
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
      }
      indexP += nextAsterisk;
    }

    // Si ya no hay asterico ni punto
    if (nextAsterisk === -1 && nextDot === -1) {
      if (bypass) {
        if (s.substring(indexS).indexOf(subP) !== -1) {
          return true;
        }
      }
      if (subP === s.substring(indexS)) {
        return true;
      }

      if (bufferBypass[subP[0]] > 0) {
        while (bufferBypass[subP[0]] >= 0) {
          if (s.substring(indexS) === subP) {
            return true;
          }
          bufferBypass[subP[0]] -= 1;
          indexS -= 1;
        }
      }
      return false;
    }
  }

  if (indexS === s.length) return true;
  return false;
}
