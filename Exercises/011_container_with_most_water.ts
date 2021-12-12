export default function maxArea(height: number[]): number {
  let waterContainer = 0;

  height.forEach((value, index) => {
    let sum = 0;
    for (let j = index + 1; j < height.length; j++) {
      const actualIndex = j - index;
      const actualValue = height[j];
      if (actualValue <= value) {
        sum = Math.max(sum, actualIndex * actualValue);
      }
    }
    waterContainer = Math.max(waterContainer, sum);
  });

  return waterContainer;
}
