// Digital graphics tools often make available a "bucket fill" tool that will only paint 
// adjacent cells . In one fill, a modified bucket tool recolors adjacent cells (connected 
// horizontally or vertically but not diagonally) that have the same color. Given a picture 
// represented as a 2-dimensional array of letters representing colors, find the minimum 
// number of fills to completely repaint the picture.

// Example
// picture= ["aabba", "aabba", "aaacb"]

// Each string represents a row of the picture and each letter represents a cell's color. The diagram below shows the 5 fills needed to repaint the picture. It takes two fills each for a and b, and one for c. The array picture is shown below.

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
    let matrix = picture.map(ele => ele.split(""));
    let visited = matrix.map(row => row.map(value => false));

    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (!visited[row][col]) {
                let letter = matrix[row][col];
                color(row, col, letter, visited, matrix);
                count++;
            }
        }
    }

    return count;
}

function color(row, col, letter, visited, matrix) {
    let squares = [[row, col]];

    while (squares.length) {
        let node = squares.shift();
        let x = node[0];
        let y = node[1];
        visited[x][y] = true;
        let neighbors = getNeighbors(x, y, letter, visited, matrix);
        squares = squares.concat(neighbors);
    }
}

function getNeighbors(row, col, letter, visited, matrix) {
    let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let neighbors = [];

    for (let i = 0; i < dirs.length; i++) {
        const newX = row + dirs[i][0];
        const newY = col + dirs[i][1];
        const inBound = newX >= 0 && newX < matrix.length && newY >= 0 && newY < matrix[0].length;
        if (inBound && !visited[newX][newY] && matrix[newX][newY] === letter) {
                    neighbors.push([newX, newY]);
                    visited[newX][newY] = true;
        }
    }

    return neighbors;


}

// Similar Problem:
// https://leetcode.com/problems/number-of-islands/