class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let current: number = nums[0];
        for(let i: number = 1; i < nums.length; i++) {
            if(nums[i] === current) {
                nums.splice(i, 1);
                i--;
            }
            else {
                current = nums[i];
            }
        }
        return nums.length;
    }
}
