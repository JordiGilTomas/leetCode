import findMedianSortedArrays from '../Exercises/004_median_of_two_sorted_arrays';

// The overall run time complexity should be O(log (m+n))
describe('Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.', () => {
  let num: number[];
  let num2: number[];
  let expected: number;

  test('[1,3],[2]', () => {
    num = [1, 3];
    num2 = [2];
    expected = 2.0;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[1,2],[3,4]', () => {
    num = [1, 2];
    num2 = [3, 4];
    expected = 2.5;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[0,0],[0,0]', () => {
    num = [0, 0];
    num2 = [0, 0];
    expected = 0.0;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[],[]', () => {
    num = [];
    num2 = [];
    expected = 1.0;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[2],[]', () => {
    num = [2];
    num2 = [];
    expected = 2.0;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[1,3],[2,7]', () => {
    num = [1, 3];
    num2 = [2, 7];
    expected = 2.5;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[3],[-2,-1]', () => {
    num = [3];
    num2 = [-2, -1];
    expected = -1.0;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });

  test('[10000],[10001]', () => {
    num = [100000];
    num2 = [100001];
    expected = 100000.5;
    expect(findMedianSortedArrays(num, num2)).toBe(expected);
  });
});
