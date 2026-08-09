class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = [];
        const anagramMap = new Map();
        for(let i = 0; i < strs.length; i++) {
            const sortedStr = strs[i].split("").sort().join("");
            if(anagramMap.has(sortedStr)) {
                anagramMap.get(sortedStr).push(strs[i]);
            }
            else {
                anagramMap.set(sortedStr, [strs[i]]);
            }
        }
        return [...anagramMap.values()];
    }
}
