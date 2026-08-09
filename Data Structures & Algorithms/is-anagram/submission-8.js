class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        const sCount = {};
        const tCount = {};
        for (let c of s) {
            if(sCount[c]) {
                sCount[c] = sCount[c] + 1
            }
            else {
                sCount[c] = 1
            }
        }
        for (let c of t) {
            if(tCount[c]) {
                tCount[c] = tCount[c] + 1
            }
            else {
                tCount[c] = 1
            }
        }
        for (let key in sCount) {
            if(sCount[key] !== tCount[key]) {
                return false
            }
        }
        return true;
    }
}
