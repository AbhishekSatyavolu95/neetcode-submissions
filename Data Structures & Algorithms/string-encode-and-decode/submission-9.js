class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.error('test input', strs)
        let encodedStr = '';
        if(strs.length === 0) {
            encodedStr = '0';
        } else {
            for(let str of strs) {
                if(str.length === 0) {
                    encodedStr = encodedStr === '' ? '16' : encodedStr + '|' + '16';
                }
                else {
                    const currentEncoded = Array.from(str).map((char) => char.charCodeAt(0) + 16).join(',');
                    encodedStr = encodedStr === '' ? currentEncoded : encodedStr + '|' + currentEncoded;
                }
            }
        }
        console.error('test encodedStr', encodedStr);
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrs = [];
        if(str === '0') 
            return [];
        const encodedStrs = str.split('|');
        for(let s of encodedStrs) {
            if(s - 16 === 0) {
                decodedStrs.push("");
            }
            else {
                let currentStr = ''
                const temp = s.split(',');
                for(let char of temp) {
                    const c = String.fromCharCode(char - 16);
                    currentStr = currentStr + c;
                }
                decodedStrs.push(currentStr);
            }
        }
        return decodedStrs;
    }
}
