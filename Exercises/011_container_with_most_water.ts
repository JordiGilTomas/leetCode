export default function maxArea(height: number[]): number {
  let sortedIndex: number;
  let sum: number;
  const sorted = Array.from(new Set(height)).sort((a, b) => b - a);
  let waterContainer = sorted[sorted.length - 1];

  for (let i = 0; i < height.length; i++) {
    sum = 0;
    sortedIndex = 0;
    for (let j = 1; j < height.length; j++) {
      const lastMax = height.lastIndexOf(sorted[sortedIndex], height.length);
      sortedIndex += 1;

      if (lastMax !== -1) {
        const currentSum =
          Math.min(height[i], sorted[sortedIndex - 1]) * (lastMax - i);
        j += lastMax - 1;
        if (currentSum > sum) {
          sum = currentSum;
        }
      }
    }
    if (sum > waterContainer) {
      waterContainer = sum;
    }
  }
  return waterContainer;
}
