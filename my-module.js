/**
 * Merges discontinuous time ranges within a given threshold.
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  // Your code here
  ranges.sort((a, b) => a[0] - b[0]);

  const ans = [];
  let previousInterval = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    let currentInterval = ranges[i];

    if (
      Math.abs(previousInterval[1] - currentInterval[0]) <= threshold ||
      previousInterval[1] >= currentInterval[0]
    ) {
      previousInterval[0] = Math.min(previousInterval[0], currentInterval[0]);
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      ans.push(previousInterval);
      previousInterval = currentInterval;
    }
  }

  ans.push(previousInterval);
  return ans;
};

module.exports = {
  mergeTimeRanges,
};
