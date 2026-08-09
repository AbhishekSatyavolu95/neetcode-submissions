class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = strs[0];
        for(let i = 0; i < strs.length; i++) {
            while (!strs[i].startsWith(common)) {
                common = common.slice(0, -1);
            }
        }
        return common;
    }
}
