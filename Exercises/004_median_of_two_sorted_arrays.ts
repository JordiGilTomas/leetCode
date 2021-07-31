export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (!nums1.length && !nums2.length) return 1;

  let sorted = [...nums1, ...nums2].sort((a, b) => (a < b ? -1 : 1));
  const middle = sorted.length / 2;

  if (sorted.length % 2) {
    return sorted[Math.round(middle) - 1];
  }

  return Math.max((sorted[middle - 1] + sorted[middle]) / 2, 0);
}
