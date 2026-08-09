class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let output = false;
        const obj = {};
        for(let i = 0; i < nums.length; i++) {

            if(Object.hasOwn(obj, nums[i])) {
                obj[nums[i]] = obj[nums[i]]+1;
            }
            else {

                obj[nums[i]] = 1;
            }
        }
        for(let key in obj) {
            if(obj[key] > 1) {
                output = true;
            }
        }
        return output;
    }
}
