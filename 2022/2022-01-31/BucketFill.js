// Digital graphics tools often make available a "bucket fill" tool that will only paint adjacent cells . In one fill, a modified bucket tool recolors adjacent cells (connected horizontally or vertically but not diagonally) that have the same color. Given a picture represented as a 2-dimensional array of letters representing colors, find the minimum number of fills to completely repaint the picture.

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
// 1 ≤ h ≤ 105
// 1 ≤ w ≤ 105
// 1 ≤ h*w ≤ 105
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
        let node = squares.pop();
        let x = node[0];
        let y = node[1];
        visited[x][y] = true;
        let neighbors = getNeighbors(x, y, letter, visited, matrix);
        squares = squares.concat(neighbors);
    }
}

function getNeighbors(row, col, letter, visited, matrix) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let neighbors = [];

    for (let dir of directions) {
        let newX = row + dir[0];
        let newY = col + dir[1];
        if (inBounds(newX, newY, matrix)) {
            if (!visited[newX][newY]) {
                if (matrix[newX][newY] === letter) {
                    neighbors.push([newX, newY]);
                    visited[newX][newY] = true;
                }
            }

        }
    }

    return neighbors;
}

function inBounds(row, col, matrix) {
    const rowInBounds = row >= 0 && row < matrix.length;
    const colInBounds = col >= 0 && col < matrix[0].length;
    return rowInBounds && colInBounds;
}