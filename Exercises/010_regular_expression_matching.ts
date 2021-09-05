export default function isMatch(s: string, p: string): boolean {
  let sIndex = 0;
  let sLastIndex = 0;
  let reverse = false;
  const letterBuffer = {};
  let dotBuffer = '';

  for (let pIndex = 0; pIndex < p.length; pIndex++) {
    const backLetter = p.slice(pIndex - 1)[0];
    const actualLetter = p.slice(pIndex)[0];
    const nextLetter = p.slice(pIndex + 1)[0];

    switch (actualLetter) {
      case '.': {
        if (
          sIndex === s.length &&
          !reverse &&
          (pIndex === p.length - 1 || p.slice(pIndex + 1) !== '*')
        ) {
          return false;
        }

        if (reverse) {
          sLastIndex -= 1;
          dotBuffer = s.slice(sLastIndex)[0] + dotBuffer;
          break;
        }

        sIndex += 1;
        reverse = false;
        break;
      }
      case '*': {
        if (backLetter === '.') {
          while (sIndex < s.length) {
            const letter = s.slice(sIndex)[0];
            letterBuffer[letter] = (letterBuffer[letter] ??= 0) + 1;
            sIndex += 1;
          }
          reverse = true;
          break;
        }
        if (!reverse) {
          while (s.slice(sIndex)[0] === backLetter) {
            const letter = s.slice(sIndex)[0];
            letterBuffer[letter] = (letterBuffer[letter] ??= 0) + 1;
            sIndex += 1;
          }
          break;
        }
        while (s.slice(sIndex)[0] === backLetter) {
          const letter = s.slice(sIndex)[0];
          letterBuffer[letter] = (letterBuffer[letter] ??= 0) + 1;
          sIndex -= 1;
        }
        if (dotBuffer.length > s.length) {
          return false;
        }
        break;
      }
      default: {
        if (nextLetter === '*') {
          break;
        }

        if (sIndex === s.length && !reverse) {
          if ((letterBuffer[actualLetter] ?? 0) === 0) {
            return false;
          }
          letterBuffer[actualLetter] -= 1;
          if (sIndex === s.length) {
            return true;
          }
        }
        if (reverse) {
          while (
            s.slice(sIndex - 1)[0] !== actualLetter &&
            (letterBuffer[s.slice(sIndex - 1, sIndex)] ?? 0) > 0
          ) {
            sIndex -= 1;
          }
          if (dotBuffer) {
            if (dotBuffer.length > sIndex) {
              return false;
            }
            dotBuffer = '';
          }
          break;
        }

        if (actualLetter !== s.slice(sIndex)[0]) {
          if ((letterBuffer[actualLetter] ?? 0) > 0) {
            letterBuffer[actualLetter] -= 1;
            break;
          }
          return false;
        }
        sIndex += 1;
        break;
      }
    }
  }

  if (sIndex === s.length) {
    return true;
  }

  return false;
}

