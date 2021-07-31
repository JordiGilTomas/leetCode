export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (!nums1.length && !nums2.length) return 1;

  let sorted = [...nums1, ...nums2].sort();
  const middle = sorted.length / 2;

  if (sorted.length % 2) {
    return sorted[Math.round(middle) - 1];
  }
  return Math.max((sorted[middle] + sorted[middle + 1]) / 2 - 1, 0);
}
