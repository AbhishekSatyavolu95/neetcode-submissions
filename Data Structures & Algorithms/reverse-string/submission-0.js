class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let i = 0;
        let j = s.length-1;
        while(i<j) {
            const temp = s[j];
            s[j] = s[i];
            s[i] = temp;
            i++;
            j--;
        }
    }
}
