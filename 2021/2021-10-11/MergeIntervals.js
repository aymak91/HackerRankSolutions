// Given a collection of time intervals, [start, end], merge and return the overlapping intervals sorted in ascending order of their start times.

// Example
// intervals = [[7, 7], [2, 3], [6, 11], [1, 2]]

// The interval [1, 2] merges with [2, 3] while [7, 7] merges with [6, 11]. There are no more overlapping intervals. The answer is [[1, 3], [6, 11]].

 

// Function Description
// Complete the function getMergedIntervals in the editor below.

 

// getMergedIntervals has the following parameter(s):
//     int intervals[[n][2]]:  the time intervals

// Returns
//     int[][2]: the merged intervals in sorted order

 

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ intervals[i][2] ≤ 109
// intervals[i][0] ≤ intervals[i][1] for all i.

/*
 * Complete the 'getMergedIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function getMergedIntervals(intervals) {
    // Write your code here

    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    for (let i=1; i<intervals.length; i++) {
        let last = outputArr.length-1;
        if (intervals[i][0] <= outputArr[last][1] && intervals[i][1] > outputArr[last][1]) {
            outputArr[last] = [outputArr[last][0], intervals[i][1]];
        } else if (intervals[i][0] <= outputArr[last][1] && intervals[i][1] <= outputArr[last][1]) {
            continue;
        } else {
            outputArr.push(intervals[i]);
        }
       
    }
    return outputArr;
}

