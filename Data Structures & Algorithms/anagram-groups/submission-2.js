class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const outputArr = [];
        for(let i = 0; i < strs.length; i++) {
            const sublist = [];
            sublist.push(strs[i]);
            for(let j = i + 1  ; j < strs.length; j++) {
                let flag = false;
                if(strs[i].length !== strs[j].length) {
                    continue;
                }
                else {
                    if(Array.from(strs[i]).sort().join('') !== Array.from(strs[j]).sort().join('')) {
                        flag = true;
                    }
                }
                if(!flag) {
                    sublist.push(strs[j]);
                    strs.splice(j,1);
                    j--;
                }
            }
            outputArr.push(sublist);
        }
        return outputArr;
    }
}
