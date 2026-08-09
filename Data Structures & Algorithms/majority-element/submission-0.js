class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const threshold = Math.floor(nums.length / 2);
        const numsMap = {};
        let output = 0;
        for(let i = 0; i < nums.length; i++) {
            if(numsMap[nums[i]]) {
                numsMap[nums[i]]++;
            }
            else {
                numsMap[nums[i]] = 1;
            }
        }
        console.log(numsMap);
        for(const key in numsMap) {
            if(numsMap[key] > threshold) {
                output = key;
            }
        }
        return output;
    }
}
