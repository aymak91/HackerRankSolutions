// Given a starting position A and ending position B, calculate the minimum number of moves needed by the knight to move from A to B if it is possible. 
// If it is not possible, return -1. All moves must remain within the chess board.

// Example
// n = 9
// startRow = 4
// startCol = 4
// endRow = 4
// endCol = 8

// The chess board has a size of  9 x 9.
// Starts at the position (startRow, startCol) = (4, 4).
// Move 1 step up or down, then 2 steps right to reach either the position (3, 6) or (5,6).
// Move 2 steps right and 1 step down or up as necessary to reach the position (4,8).
// The minimum number of moves to move from the position (4, 4) to the position (4, 8) is 2.
 
// Function Description 
// Complete the function minMoves in the editor below. 

// minMoves has  the following parameters:
//     int n: the width and height of the square board
//     int startRow: the row of the starting location
//     int startCol: the column of the starting location
//     int endRow: the row of the target location
//     int endCol: the column of the target location

// Returns:
//     int: a single integer that denotes the number of moves required or -1 if it is not possible to reach the target location.

// Constraints
// 4 ≤ n ≤ 150
// 0 ≤ startRow, startCol, endRow, endCol < n

/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER startRow
 *  3. INTEGER startCol
 *  4. INTEGER endRow
 *  5. INTEGER endCol
 */

function minMoves(n, startRow, startCol, endRow, endCol) {
    //Write your code here
    const visited = new Set();
    visited.add(`${startRow}-${startCol}`);
    let count = 0;
    const queue = [[startRow, startCol]];
    const directions = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]

    while (queue.length !== 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let pos = queue.shift();
            
            for (let dir of directions) {
                let newRow = dir[0] + pos[0];
                let newCol = dir[1] + pos[1];
                      
                if (validCoordinate(newRow, newCol, n, visited)) {
                    if (newRow === endRow && newCol === endCol) return count + 1;
                    queue.push([newRow, newCol]);
                    visited.add(`${newRow}-${newCol}`);
                }
            }
        }
        count++;
    }
    return -1;
}

const validCoordinate = (row, col, n, visited) =>  rowInBound(row, n) && colInBound(col, n) && !visited.has(`${row}-${col}`)
const rowInBound = (row, n) => row >= 0 && row < n;
const colInBound = (col, n) => col >= 0 && col < n;