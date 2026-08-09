class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {};
        for(let i of nums) {
            frequency[i] = (frequency[i] || 0) + 1;
        }
        const keysArr = Object.keys(frequency)
        keysArr.sort((i,j) => frequency[j] - frequency[i]);
        return keysArr.slice(0, k);
    }
}
