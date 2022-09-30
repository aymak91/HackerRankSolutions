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
// 1 ≤ n ≤ 10^5
// 1 ≤ intervals[i][2] ≤ 10^9
// intervals[i][0] ≤ intervals[i][1] for all i.


function getMergedIntervals(intervals) {
    // Write your code here

    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    let lastInterval = {
        start: intervals[0][0],
        end: intervals[0][1]
    }
    
    for (let i=1; i<intervals.length; i++) {
        const currentInterval = {
            start: intervals[i][0],
            end: intervals[i][1],
        }
        const lastIntervalIdx = outputArr.length-1;
        lastInterval.start = outputArr[lastIntervalIdx][0];
        lastInterval.end = outputArr[lastIntervalIdx][1];

        if (currentInterval.start <= lastInterval.end && currentInterval.end > lastInterval.end) outputArr[lastIntervalIdx][1] = currentInterval.end;
        if (currentInterval.start <= lastInterval.end && currentInterval.end <= lastInterval.end) continue;
        if (currentInterval.start > lastInterval.end) outputArr.push(intervals[i]);
       
    }
    return outputArr;
}