class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 2) {
            return [0,1];
        }
        const numbersMap = new Map(nums.map((num, index) => [num, index]));
        for(let i = 0; i < nums.length; i++) {
            if(numbersMap.has(target - nums[i]) && numbersMap.get(target - nums[i]) !== i) {
                return [i, numbersMap.get(target - nums[i])]
            }
        }
    }
}
