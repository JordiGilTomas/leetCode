export default function isMatch(text: string, pattern: string): boolean {
  const dp = Array(text.length + 1)
    .fill(null)
    .map(() => Array(pattern.length + 1).fill(false));

  dp[text.length][pattern.length] = true;

  for (let i = text.length; i >= 0; i--) {
    for (let j = pattern.length - 1; j >= 0; j--) {
      const firstMatch =
        i < text.length &&
        (pattern.charAt(j) === text.charAt(i) || pattern.charAt(j) === ".");

      if (j + 1 < pattern.length && pattern.charAt(j + 1) === "*") {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
}
