class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        for(let str of strs) {
            const sortedStr = Array.from(str).sort().join('');
            if(!result[sortedStr]) {
                result[sortedStr] = [];
            }
            result[sortedStr].push(str);
        }
        return Object.values(result);
    }
}
