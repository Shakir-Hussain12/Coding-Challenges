/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0;
  let j = 0;
  const res = [];

  let len1 = nums1.length
  let len2 = nums2.length
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i++]);
    } else {
      res.push(nums2[j++]);
    }
  }

  while (i < len1) {
    res.push(nums1[i++]);
  }

  while (j < len2) {
    res.push(nums2[j++]);
  }

  const len = res.length;
  if (len % 2 === 0) {
    const first = len / 2 - 1;
    const second = len / 2;
    const ans = (res[first] + res[second]) / 2;
    return ans;
  }
  const first = Math.floor(len / 2);
  return res[first];
};