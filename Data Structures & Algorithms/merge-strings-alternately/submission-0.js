class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const length = word1.length >= word2.length ? word1.length : word2.length;
        let output = '';
        for(let i = 0; i < length; i++) {
            if(word1[i]) {
                output += word1[i]
            }
            if(word2[i]) {
                output += word2[i]
            }
        }
        return output;
    }
}
