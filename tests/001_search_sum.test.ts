import twoSum from "../exercises/001_search_sum";

let nums: number[];
let target: number;
let expected: number[];

test("[2,7,11,15], target[9]", () => {
  nums = [2, 7, 11, 15];
  target = 9;
  expected = [0, 1];
  expect(twoSum(nums, target)).toStrictEqual(expected);
});

test("[3,2,4], target[6]", () => {
  nums = [3, 2, 4];
  target = 6;
  expected = [1, 2];
  expect(twoSum(nums, target)).toStrictEqual(expected);
});

test("[3,3], target[6]", () => {
  nums = [3, 3];
  target = 6;
  expected = [0, 1];
  expect(twoSum(nums, target)).toStrictEqual(expected);
});

test("[], target[]", () => {
  nums = [];
  target = null;
  expected = [];
  expect(twoSum(nums, target)).toStrictEqual(expected);
});
