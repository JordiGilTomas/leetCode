export default function maxArea(height: number[]): number {
  return height.reduce((acc, value, index) => {
    let sum = 0;
    for (let j = index + 1; j < height.length; j++) {
      const actualIndex = j - index;
      const actualValue = height[j];
      if (actualValue <= value) {
        sum = Math.max(sum, actualIndex * actualValue);
      }
    }
    return Math.max(acc, sum);
  }, Math.min(...height));
}
