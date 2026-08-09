class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsCount = {};
        for (let num of nums) {
            numsCount[num] = numsCount[num] ? numsCount[num] + 1 : 1;
        }
        const output = Object.entries(numsCount)
        .sort((a, b) => b[1] - a[1]) // Sort descending (High to Low)
        .map(([key]) => key)
        .slice(0, k); 
        return output;
    }
}
