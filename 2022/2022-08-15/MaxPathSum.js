// There is a puzzle using a rectangular grid. The upper left corner is at (row, column) = (0, 0). Each cell 
// contains an integer. The score starts at 0 and is the sum of all the integers in each cell visited as 
// the grid is traversed. Movement begins in either the top or the bottom row and stays within the bounds of the grid. 
// Only 1 cell can be visited per row per direction. Determine the maximum achievable score.
 
// Movement for the two scenarios are as follows: 

// From a cell (i,j) = (0,p), i.e. in the top row:
// (i+1, j-1)
// (i+1, j)
// (i+1, j+1)
// From a cell (i,j) = (rows-1,q), i.e. in the bottom row:
// (i-1, j-1)
// (i-1, j)
// (i-1, j+1)
 
// Example
// board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// p = 1
// q = 0

// For example, there is a 3x3 grid and the cursor starts at position (0, p) = (0,1) or (rows - 1, q) = (2, 0).  
// Two possible paths are shown below.

// Each path shown is the highest scoring path from the given position.

// The better path starts from (0, 1) and the score is 2 + 6 + 9 = 17.

// The worse path starts at position (2, 0), where the score is 7 + 5 + 3 = 15. 

// Function Description 
// Complete the function maxPathSum in the editor below.

// maxPathSum has the following parameter(s):
//     int board[n][m]:  the values for the grid cells
//     p:  row 0 starting column
//     q:  row n -1 starting column

// Returns:
//     int: the maximum achievable score from the two start positions

// Constraints
// 2 < n, m < 501
// 0 < board[i][j] < 501.
// 0 ≤ p, q ≤ m − 1

/*
 * Complete the 'maxPathSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY board
 *  2. INTEGER p
 *  3. INTEGER q
*/

function maxPathSum(board, p, q) {
    // Write your code here
    return Math.max(maxPathDFS(board, 0, p, 1), maxPathDFS(board, board.length-1, q, -1))
}

const maxPathDFS = (board, row, col, dir, memo = {}) => {
    const coodinate = `${row},${col}`;
    if (memo[coodinate]) return memo[coodinate];
    
    if (!rowInBounds(row+dir, board)) return board[row][col];
    
    const neighbors = [col-1, col, col+1]
        
    let pathSums = [];
    for (let newCol of neighbors) {
        if (!rowInBounds(row+dir, board) || !colInBounds(newCol, board)) continue;
        
        const newSum = maxPathDFS(board, row + dir, newCol, dir, memo) 
        pathSums.push(newSum);
        
    }
    
    const maxPath = Math.max(...pathSums) + board[row][col];
    
    memo[coodinate] = maxPath;
    
    return maxPath;
    
}

const rowInBounds = (row, board) => row >= 0 && row < board.length;
const colInBounds = (col, board) => col >= 0 && col < board[0].length;