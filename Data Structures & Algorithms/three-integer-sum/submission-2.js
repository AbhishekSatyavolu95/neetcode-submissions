class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result =[];
        if(nums.length < 3)
            return result;
        const sorted = nums.sort((a,b) => a-b);
        for(let i = 0; i < sorted.length; i++) {
            if(i > 0 && sorted[i] === sorted[i - 1])
                continue;
            let left = i + 1;
            let right = sorted.length - 1;
            while(left < right) {
                const sum = sorted[left] + sorted[right];
                if(sum === -sorted[i]) {
                    result.push([sorted[left], sorted[right], sorted[i]]);
                    left++;
                    right--;

                    while(left < right && sorted[left] === sorted[left - 1])
                        left++;
                    while(left < right && sorted[right] === sorted[right + 1])
                        right--;
                }
                else if(sum < -sorted[i]) {
                    left++;
                }
                else 
                {
                    right--;
                }
            }
        }
        return result;
    }
}
