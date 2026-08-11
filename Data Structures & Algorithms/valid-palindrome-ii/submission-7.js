class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isRemainingPalindrome(s, left, right) {
        while(left < right) {
            if(s.charAt(left) === s.charAt(right)) {
                left++;
                right--;
            }
            else {
                return false;
            }
        }
        return true;
    }

    validPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        let del = 0;
        while(i < j) {
            if(s[i] === s[j]) {
                i++;
                j--;
            }
            else if(del === 0) {
                if(s[i] === s[j-1] && this.isRemainingPalindrome(s, i, j-1)) {
                    j--;
                }
                else if(s[i+1] === s[j] && this.isRemainingPalindrome(s, i+1, j)) {
                    i++;
                }
                else {
                    return false;
                }
                del = 1;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
