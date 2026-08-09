class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charMap = {};
        for(const char of s) {
            if(Object.hasOwn(charMap, char)) {
                charMap[char] = charMap[char] + 1;
            }
            else {
                charMap[char] = 1;
            }
        }
        for(const char of t) {
            if(Object.hasOwn(charMap, char)) {
                charMap[char] = charMap[char] - 1;
            }
            else {
                charMap[char] = 1;
            }
        }
        for(const key in charMap) {
            if(charMap[key] !== 0) {
                return false;
            }
        }
        return true;
    }
}
