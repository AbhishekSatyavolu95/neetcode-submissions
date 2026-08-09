class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap = {};
        for(let i = 0; i < nums.length; i++) {
            if(Object.hasOwn(numMap, nums[i])) {
                return true;
            }
            else {
                numMap[nums[i]] = 1;
            }
        }
        return false;
    }
}
