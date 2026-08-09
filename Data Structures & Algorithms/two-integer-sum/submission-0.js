class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let flag = false;
        const outputArr = [];
        for(let i = 0; i < nums.length; i++) {
            for(let j = i+1; j < nums.length; j++) {
                if(nums[i] + nums[j] === target) {
                    outputArr.push(i);
                    outputArr.push(j)
                    flag = true;
                }
                if(flag) {
                    break;
                }
            }
            if(flag) {
                break;
            }
        }
        return outputArr;
    }
}
