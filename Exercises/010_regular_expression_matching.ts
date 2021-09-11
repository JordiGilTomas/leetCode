export default function isMatch(s: string, p: string): boolean {
  let sIndex = 0;
  let fullByPass = false;
  const letterBuffer: { [key: string]: number } = {};

  for (let pIndex = 0; pIndex < p.length; pIndex++) {
    const patternLetter = p.slice(pIndex, pIndex + 1);
    const nextPatternLetter = p.slice(pIndex + 1, pIndex + 2);

    switch (patternLetter) {
      case '.': {
        if (nextPatternLetter === '*') {
          fullByPass = true;
          pIndex += 1;
          if (pIndex === p.length - 1) {
            return true;
          }
          break;
        }

        if (fullByPass) {
          fullByPass = false;
          do {
            if (isMatch(s.slice(sIndex), p.slice(pIndex))) {
              return true;
            }
            sIndex += 1;
          } while (sIndex < s.length);

          return false;
        }

        if (sIndex < s.length) {
          sIndex += 1;
        } else {
          if (letterBuffer[s.slice(-1)] > 0) {
            if (pIndex === p.length - 1) {
              return true;
            }
          }
          return false;
        }

        break;
      }
      default: {
        if (fullByPass) {
          const userString = s.slice(sIndex);
          return `${s} `
            .slice(sIndex)
            .split('')
            .some((l, i) => {
              if (
                l === p.slice(pIndex, pIndex + 1) ||
                nextPatternLetter === '*'
              ) {
                return isMatch(userString.slice(i), p.slice(pIndex));
              }

              if (nextPatternLetter === '*' && i === s.length - 1) {
                if (isMatch(userString.slice(i + 1), p.slice(pIndex))) {
                  return true;
                }
              }

              return false;
            });
        }

        const userLetter = s.slice(sIndex, sIndex + 1);

        if (nextPatternLetter === '*') {
          Object.keys(letterBuffer).forEach((key) => {
            if (key !== userLetter) {
              delete letterBuffer.key;
            }
          });

          let foundCoincidence = false;

          while (s.slice(sIndex, sIndex + 1) === patternLetter) {
            letterBuffer[s.slice(sIndex, sIndex + 1)] =
              (letterBuffer[s.slice(sIndex, sIndex + 1)] ?? 0) + 1;
            sIndex += 1;
            foundCoincidence = true;
          }

          if (foundCoincidence) {
            Object.keys(letterBuffer).forEach((key) => {
              if (key !== userLetter) {
                delete letterBuffer.key;
              }
            });
          }
          if (sIndex === s.length && pIndex === p.length - 1) {
            return true;
          }
          pIndex += 1;
          break;
        }

        if (s.slice(sIndex, sIndex + 1) === p.slice(pIndex, pIndex + 1)) {
          sIndex += 1;
        } else {
          if (letterBuffer[patternLetter] > 0) {
            letterBuffer[patternLetter] -= 1;
            break;
          }
          return false;
        }
      }
    }
  }
  if (sIndex === s.length) {
    return true;
  }

  return false;
}

