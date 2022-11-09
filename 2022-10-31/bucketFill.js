// Digital graphics tools often make available a "bucket fill" tool that will only paint adjacent cells . In one fill, a modified bucket tool 
// recolors adjacent cells (connected horizontally or vertically but not diagonally) that have the same color. Given a picture represented as a 
// 2-dimensional array of letters representing colors, find the minimum number of fills to completely repaint the picture.

// Example
// picture= ["aabba", "aabba", "aaacb"]

// Each string represents a row of the picture and each letter represents a cell's color. The diagram below shows the 5 fills needed to repaint the 
// picture. It takes two fills each for a and b, and one for c. The array picture is shown below.

// Function Description
// Complete the function strokesRequired in the editor below.


// strokesRequired has the following parameter(s):
//     string picture[h]:  an array of strings where each string represents one row of the picture to be painted

// Output:
//     int: the minimum number of fills required to repaint the picture

// Constraints
// h and w refer to height and width of the graph.
// 1 ≤ h ≤ 10^5
// 1 ≤ w ≤ 10^5
// 1 ≤ h*w ≤ 10^5
// length(picture[i]) = w (where 0 ≤ i < h)
// picture[i][j] is in the set  {'a', 'b', 'c'} (where 0 ≤ i < h and 0 ≤ j < w)

/*
 * Complete the 'strokesRequired' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY picture as parameter.
 */

function strokesRequired(picture) {
    // Write your code here
    
    let matrix = picture.map(ele => ele.split(""));
    let visited = new Set();
    
    let fills = 0;
    
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[0].length; col++) {
            const color = matrix[row][col]
            if (!visited.has(`${row}-${col}`)) {
                fills += dfsFill(matrix, row, col, visited, color);
            }
        }
    }

    
    return fills;

}

const dfsFill = (matrix, row, col, visited, color) => {
    
    if (!valid(matrix, row, col, visited, color)) return 0;
    visited.add(`${row}-${col}`)
    
    const directions = [[1,0], [-1, 0], [0, 1], [0, -1]];
    
    for (let dir of directions) {
        const [newRow, newCol] = [dir[0]+row, dir[1]+col];
        dfsFill(matrix, newRow, newCol, visited, color);
    }
    
    return 1;
  
}

const valid = (matrix, row, col, visited, color) =>  inBounds(matrix, row, col) && color === matrix[row][col] && !visited.has(`${row}-${col}`);

const inBounds = (matrix, row, col) => {
    const rowInBound = row >= 0 && row < matrix.length;
    const colInBound = col >= 0 && col < matrix[0].length;
    
    return rowInBound && colInBound;
}
