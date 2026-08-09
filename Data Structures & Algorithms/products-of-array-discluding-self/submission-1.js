class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const outputArr = [];
        for(let i = 0; i < nums.length; i++) {
            for(let j = 0; j < nums.length; j++) {
                if(i !== j) {
                    if(outputArr[i] || outputArr[i] === 0) {
                        outputArr[i] = outputArr[i] * nums[j];
                    }
                    else {
                        outputArr[i] = nums[j]
                    }
                }
            }
        }
        return outputArr;
    }
}
