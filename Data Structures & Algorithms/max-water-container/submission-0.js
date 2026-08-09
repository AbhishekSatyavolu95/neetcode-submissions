class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right) {
            const width = right - left;
            const height = Math.min(heights[left], heights[right]);
            const currentArea = height * width
            area = Math.max(currentArea, area);
            if(heights[left] < heights[right])
                left++;
            else
                right--;
        }
        return area;
    }
}
