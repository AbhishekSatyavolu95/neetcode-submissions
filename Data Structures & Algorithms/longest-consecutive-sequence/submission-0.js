class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;
        if(!nums || nums.length === 0) return maxLength;
        const set = new Set(nums);
        for(const num of set) {
            if(set.has(num - 1))
                continue;
            let length = 1;
            let current = num;
            while(set.has(current + 1)) {
                length++;
                current++;
            }
            maxLength = Math.max(maxLength, length);
        }
        return maxLength;
    }
}
