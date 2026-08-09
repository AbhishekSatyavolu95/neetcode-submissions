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
        const numsIndex = {};
        for(let i = 0; i < nums.length; i++) {
            numsIndex[nums[i]] = i;
        }
        console.log('numsIndex', numsIndex)
        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if(Object.hasOwn(numsIndex, difference) && numsIndex[difference] !== i) {
                return [i, numsIndex[difference]];
            }
        }
    }
}
