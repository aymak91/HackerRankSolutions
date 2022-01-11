// Given a collection of time intervals, [start, end], merge and return the overlapping 
// intervals sorted in ascending order of their start times.

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

function getMergedIntervals(intervals) {
    // Write your code here

    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    for (let i=1; i<intervals.length; i++) {
        const lastIntervalIdx = outputArr.length-1;
        const lastRightBound = outputArr[lastIntervalIdx][1];
        const leftBound = intervals[i][0]; 
        const rightBound = intervals[i][1]; 

        if (leftBound <= lastRightBound && rightBound > lastRightBound) outputArr[lastIntervalIdx][1] = rightBound;
        if (leftBound <= lastRightBound && rightBound <= lastRightBound) continue;
        if (leftBound > lastRightBound) outputArr.push(intervals[i]);
       
    }
    return outputArr;
}