class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const length = board.length;
        const rows = new Array(length).fill(null).map(() => new Set());
        const cols = new Array(length).fill(null).map(() => new Set());
        const boxes = new Array(length).fill(null).map(() => new Set());
        for(let row = 0; row < length; row++) {
            for (let col = 0; col < length; col++) {
                const val = board[row][col];
                console.error('test', val);
                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                if(val === ".") {
                    continue;
                }
                else if(rows[row].has(val) || cols[col].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }
                else {
                    rows[row].add(val);
                    cols[col].add(val);
                    boxes[boxIndex].add(val);
                }
            }
        }
        return true;
    }
}
