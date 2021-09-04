export default function isMatch(s: string, p: string): boolean {
  if (p === '.*') return true;

  if (![...p].some((l) => l === '*' || l === '.')) {
    return s === p;
  }

  let indexS = 0;
  let fullBypass = false;
  const bufferBypass = {};
  let accPattern = '';

  for (let indexP = 0; indexP < p.length; indexP++) {
    const subP = p.slice(indexP);
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

      const pattern = subP.slice(0, nextDot);
      if (fullBypass && pattern) {
        const indexBypass = s.slice(indexS).lastIndexOf(pattern);

        if (indexBypass === -1) {
          return false;
        }
        indexS += indexBypass;
        indexP += pattern.length;
        if (indexP === p.length - 1 && indexS === s.length - 1) {
          return true;
        }
      }
      if (s.slice(indexS, indexS + pattern.length) === pattern || !pattern) {
        indexS += pattern.length + 1;
        indexP += pattern.length;
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
        if (indexS > s.length) {
          while (bufferBypass[s.slice(indexS - 2)[0]] > 0) {
            bufferBypass[s.slice(indexS - 1)[0]] -= 1;
            indexS -= 1;
          }
          if (indexS > s.length) {
            return false;
          }
        }
        if (indexP === p.length - 1 && indexS === s.length - 1) {
          return true;
        }
        continue;
      } else {
        return false;
      }
    }

    // Caso con .*
    if (nextDot !== -1 && nextAsterisk - nextDot === 1) {
      if (fullBypass) {
        indexS += s.slice(indexS).indexOf(subP[0]);
      }
      if (subP[nextAsterisk - 1] !== '.') {
        bufferBypass[subP[0]] ??= 0;
      }
      const pattern = subP.slice(0, nextDot);

      if (pattern.length === 1 && s.slice(indexS, 1) !== pattern[0]) {
        while (bufferBypass[subP[0]] > 0 && s.slice(indexS, 1) !== pattern[0]) {
          indexS -= 1;
          bufferBypass[subP[0]] -= 1;
          if (s.slice(indexS, 1) === pattern[0]) {
            indexP += 1;
          }
        }

        if (s.slice(indexS, indexS + 1) !== pattern[0]) {
          return false;
        }
      }

      if (s.slice(indexS).indexOf(pattern) !== -1) {
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
      if (fullBypass) {
        const pattern = subP.slice(
          0,
          nextAsterisk === 1 ? nextAsterisk : nextAsterisk - 1,
        );
        if (nextAsterisk > 1) {
          fullBypass = false;
        }

        if (pattern) {
          const patternToByPass = s.slice(indexS).lastIndexOf(pattern);

          if (patternToByPass !== -1) {
            indexS += patternToByPass;
            fullBypass = false;

            for (let i = 1; i < patternToByPass; i++) {
              const letter = s.slice(indexS - i - 1, patternToByPass)[0];
              bufferBypass[letter] = (bufferBypass[subP[0]] ??= 0) + 1;
            }
          }
        }
      }
      const pattern = subP.slice(0, nextAsterisk - 1);
      let origin = s.slice(indexS, indexS + pattern.length);

      if (origin !== pattern) {
        accPattern += pattern;
        while (bufferBypass[s.slice(indexS - 1)[0]] > 0) {
          bufferBypass[s.slice(indexS - 1)[0]] -= 1;
          indexS -= 1;
        }
      }

      origin = s.slice(indexS, indexS + pattern.length);

      if (origin !== pattern) {
        return false;
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
        fullBypass = false;
        bufferBypass[subP[nextAsterisk - 1]] += 1;
      }

      if (bufferBypass[subP[0]] > 0) {
        Object.entries(bufferBypass).forEach(([k]) => {
          if (k !== subP[0]) delete bufferBypass[k];
        });
      }
      if (s.slice(indexS).indexOf(pattern) !== -1) {
        if (indexP === p.length - 1 && indexS === s.length) {
          return true;
        }
      }
      indexP += nextAsterisk;
      if (indexP === p.length - 1 && indexS === s.length) {
        if (!s.slice(indexS)) {
          return true;
        }

        if (s.slice(indexS) !== subP[0]) {
          return false;
        }
        return true;
      }
      if (indexP === p.length - 1 && indexS < s.length - 1 && !fullBypass) {
        return false;
      }

      if (indexP === p.length - 1 && s.slice(indexS) !== subP && !fullBypass) {
        return false;
      }
    }

    // Si ya no hay asterico ni punto
    if (nextAsterisk === -1 && nextDot === -1) {
      if (fullBypass) {
        if (
          s.slice(indexS).lastIndexOf(subP) !== -1 &&
          s[s.length - 1] === p[p.length - 1]
        ) {
          return true;
        }
      }
      if (subP === s.slice(indexS)) {
        return true;
      }

      if (bufferBypass[subP[0]] > 0) {
        while (bufferBypass[subP[0]] >= 0) {
          if (s.slice(indexS) === accPattern + subP) {
            return true;
          }
          bufferBypass[subP[0]] -= 1;
          indexS -= 1;
        }
      }

      if (fullBypass && indexP === p.length - 1) {
        if (s.slice(s.length - 1) !== subP) {
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

