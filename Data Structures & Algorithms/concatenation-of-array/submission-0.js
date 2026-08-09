class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const output = [];
        output.push(...nums);
        output.push(...nums);
        return output;
    }
}
