// 26 nurses have employee numbers 0 through 25 that map to ids 'a' through 'z'.  They work in shifts beginning at time 0, and only one works at a time. When one stops, the next nurse begins immediately.

// Given the employee numbers and the times at which their shifts end in a 2-D array where each element is [employee number, leave time], find the ID of the nurse with the longest single shift.

// Note: If the same employee has two contiguous shifts, they are considered to be different. 

// Example
// leaveTimes = [[0, 3], [2, 5], [0, 9], [1, 15]]

// In the example, the shifts are as follows:

// Employee 0 works from t=0 to t=3, i.e., for 3 units.
// 2 works from t=3 to t=5, 2 units
// 0 works from t=5 to t=9, 4 units
// 1 works from t=9 to t=15, 6 units
 
// The longest shift is of 6 units by employee 1. Return employee 1's id, 'b'.

// Function Description
// Complete the function findLongestSingleSlot in the editor below.

// findLongestSingleSlot has the following parameter(s):
//     int leaveTimes[n][2]:  [employee number, the time the employee's shift ends]

// Returns:
//     char: the character ID of the nurse with the longest single shift

// Constraints
// 1 ≤ n ≤ 10^5
// 0 ≤ leaveTimes[i][0] ≤ 25 (0 ≤ i < n)
// 1 ≤ leaveTimes[i][1] ≤ 10^8 (0 ≤ i < n)
// Only one nurse has the longest shift.
// leaveTimes is sorted in ascending order of leaveTimes[i][1]

/*
 * Complete the 'findLongestSingleSlot' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY leaveTimes as parameter.
 */

function findLongestSingleSlot(leaveTimes) {
    // Write your code here
    let alphaMap = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let time = 0;
    let longestShift = [-1,-1];
    
    for (let checkout of leaveTimes) {
        const employee = alphaMap[checkout[0]];
        const workTime = checkout[1] - time;
        time = checkout[1];
        
        if (workTime > longestShift[1]) longestShift = [employee, workTime];
    }
    
    return longestShift[0];
}


