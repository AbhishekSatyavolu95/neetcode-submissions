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
        const sArr = s.split('');
        let i = 0;
        let j = sArr.length - 1;
        let del = 0;
        while(i < j) {
            if(sArr[i] === sArr[j]) {
                i++;
                j--;
            }
            else if(del === 0) {
                if(sArr[i] === sArr[j-1] && this.isRemainingPalindrome(s, i, j-1)) {
                    sArr.splice(j, 1);
                    j--;
                }
                else if(sArr[i+1] === sArr[j] && this.isRemainingPalindrome(s, i+1, j)) {
                    sArr.splice(i, 1);
                    i--;
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
