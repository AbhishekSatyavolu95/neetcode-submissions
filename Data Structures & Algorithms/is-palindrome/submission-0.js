class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-z0-9]/gi, "");
        const reverseS = cleaned.toLowerCase().split('').reverse().join('');
        return cleaned.toLowerCase() === reverseS;
    }
}
