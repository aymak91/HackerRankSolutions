function getMergedIntervals(intervals) {
    // Write your code here

    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    for (let i=1; i<intervals.length; i++) {
        const lastIntervalIdx = outputArr.length-1;
        const lastRightBound = outputArr[lastIntervalIdx][1]
        const leftBound = intervals[i][0];
        const rightBound = intervals[i][1];


        if (leftBound <= lastRightBound && rightBound > lastRightBound) outputArr[lastIntervalIdx][1] = rightBound;
        if (leftBound <= lastRightBound && rightBound <= lastRightBound) continue;
        if (leftBound > lastRightBound) outputArr.push(intervals[i]);
       
    }
    return outputArr;
}