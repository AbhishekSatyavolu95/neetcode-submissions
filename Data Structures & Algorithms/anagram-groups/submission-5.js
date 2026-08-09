class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) {
            return [strs];
        }
        const strsCount = {};
        for(let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split("").sort().join("");
            if(strsCount[sorted]) {
                strsCount[sorted].push(strs[i]);
            }
            else {
                strsCount[sorted] = [strs[i]];
            }
        }
        const output = [];
        for(let key in strsCount) {
            output.push(strsCount[key]);
        }
        return output;
    }
}
