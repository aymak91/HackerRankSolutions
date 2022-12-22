// A 2-D grid consisting of some blocked (represented as '#') and some unblocked (represented as '.') 
// cells is given. The starting position of a pointer is in the top-left corner of the grid. 
// It is guaranteed that the starting position is in an unblocked cell. It is also guaranteed that 
// the bottom-right cell is unblocked. Each cell of the grid is connected with its right, left, top, 
// and bottom cells (if those cells exist). It takes 1 second for a pointer to move from a cell to 
// its adjacent cell. If the pointer can reach the bottom-right corner of the grid within maxTime 
// seconds, return the string 'Yes'. Otherwise, return the string 'No'. 

// Example
// rows = 3
// grid = ['..##', '#.##', '#...']
// maxTime = 5

// ..##
// #.##
// #...
// It will take the pointer 5 seconds to reach the bottom right corner. 
// As long as maxTime ≥ 5, return 'Yes'.

// Function Description
// Complete the function reachTheEnd in the editor below.

// reachTheEnd has the following parameter(s):
//     string grid[r]: the rows of the grid
//     int maxTime: the maximum time to complete the traversal

// Returns:
//     string: the final string; either 'Yes' or 'No'

// Constraints
// 1 ≤ rows ≤ 500
// 0 ≤ maxTime ≤ 10^6
 
/*
 * Complete the 'reachTheEnd' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER maxTime
 */

function reachTheEnd(grid, maxTime) {
    const visited = new Set().add('0-0')
    const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
    let queue = [[0, 0, 0]] // [row, col, time]
    let minTime = Infinity
    let gridLen = grid.length
    let gridWid = grid[0].length

    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            const [row, col, time] = queue.shift();

            if (row === gridLen - 1 && col === gridWid - 1) {
                minTime = Math.min(minTime, time);
                break;
            }

            for (let i = 0; i < dirs.length; i++) {
                let newRow = row + dirs[i][0];
                let newCol = col + dirs[i][1];
                if (validMove(newRow, newCol, gridLen, gridWid, visited, grid)) {
                    queue.push([newRow, newCol, time + 1]);
                }
            }
        }
    }

    return minTime <= maxTime ? 'Yes' : 'No';
}

function validMove(row, col, gridLen, gridWid, visited, grid) {
    if (visited.has(`${row}-${col}`)) return false;
    visited.add(`${row}-${col}`);
    const withinBounds = row < gridLen && row >= 0 && col < gridWid && col >= 0;
    if (withinBounds && grid[row][col] !== '#') return true;
    return false;

}
