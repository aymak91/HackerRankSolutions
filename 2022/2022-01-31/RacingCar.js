// Chris is playing the "Racing Car" arcade game. In this game, Chris is controlling a car that can move sideways but the car keeps moving 
// forward at all times. Chris can move the car into any lane at any moment. When changing lanes, the racecar can move through an obstacle.  
// It cannot move to a lane that is occupied. For example, if the racecar is in lane 1 and lane 2 is occupied, it can move to lane 3, but 
// not to lane 2. There are some obstacles on the track. There are 3 lanes in the game and Chris starts the game from the middle lane. 
// Determine the minimum sideways movement needed in order to complete the game. Note that a movement at one moment, be it from lane 1 to lane 
// 2 or from lane 1 to lane 3, is counted as a single movement.

 

// Example
// n = 3
// obstacleLanes = [2, 1, 2]

// Chris can move the car in the first second to lane 3 and finish the race. The total number of motions required is 1.

// Function Description
// Complete the function minimumMovement in the editor below.

// minimumMovement has the following parameter(s):
//     int obstacleLanes[n]:  the lanes in which each obstacle is present
// Returns
//     int: the minimum sideways movements that Chris must make to successfully complete the game

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ obstacleLanes[i] ≤ 3 (0 ≤ i < n)
// All races can be completed.

/*
 * Complete the 'minimumMovement' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY obstacleLanes as parameter.
 */

// Test cases: 
//     Case 1: obstableLane = [2, 3, 2, 1, 3, 1]
//     Output: 2
    
//     Case 2: obstableLane = [2, 1, 3, 3, 3, 1]
//     Output: 2

//     Case 3: obstableLane = [3, 2, 2, 1, 2, 1]
//     Output: 1

//     Case 4: obstableLane = [1, 3, 1, 1, 2, 3, 2, 2, 2, 2, 3, 2, 2, 3, 3, 2, 3, 2, 2, 3, 1, 1, 3, 2, 3, 1, 1, 1, 2, 1, 2, 3, 2, 1, 2, 1, 3, 2, 3, 3, 3, 1, 2, 2, 1, 1, 2, 1, 3, 2, 1, 3, 3, 2, 3, 3, 1, 3, 1, 2, 3, 1]
//     Output: 14

function minimumMovement(obstacleLanes) {
    // 2,1,3,2
    // [
    //     [2,   inf,    1]
    //     [inf,   2 ,   1]
    //     [1 ,   inf,     1]
    //     [1,     0,      1]
    // ]
    // nextPossibleRow = ''
    // prevRowPos = 1
    
    // Write your code here
    //creating grid of car rows 
    let carRows = new Array(obstacleLanes.length)
        .fill('')
        .map(() =>
            new Array(3).fill('')
        )

    //looping over nested arrays to add obstacles 
    for (let i = 0; i < carRows.length; i++) {
        carRows[i][obstacleLanes[i] - 1] = Infinity;
    }

    //start of moves
    carRows.unshift([1, 0, 1]);

    //checking each available position and assigning it its respective number of moves
    for (let i = 1; i < carRows.length; i++) {
        for (let j = 0; j < 3; j++) {
            let nextPossibleRow = carRows[i][j]
            let prevRowPos = carRows[i - 1][j]
            if (nextPossibleRow === '' && prevRowPos === Infinity) {
                carRows[i][j] = Math.min(...carRows[i - 1]) + 1
            } else if (nextPossibleRow === '' && prevRowPos !== Infinity) {
                carRows[i][j] = carRows[i - 1][j]
            }
        }
    }
    return Math.min(...carRows[carRows.length - 1])
}