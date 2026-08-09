class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let output = nums[0];
        let count = 1;
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] === output) {
                count++;
            }
            else {
                count--;
            }
            if(count === 0) {
                output = nums[i];
                count = 1;
            }
        }
        return output;
    }
}
