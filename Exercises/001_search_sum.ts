function twoSum(nums: number[], target: number): number[] {
  const result = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (result.has(nums[i])) {
      return [result.get(nums[i]), i];
    }
    result.set(target - nums[i], i);
  }
  return [];
}

export default twoSum;
