// Sometimes it is necessary to filter a signal by frequency, e.g. to reduce noise outside of the expected frequency range.  
// Filters can be stacked, allowing only the frequencies within the range allowed by all filters to get through.  For example, 
// three filters with ranges of (10, 17), (13, 15) and (13, 17) will only allow signals between 13 and 15 through.  The only range 
// that all filters overlap is (13, 15).  Given n signals' frequencies and a series of m filters that let through frequencies in 
// the range x to y, inclusive, determine the number of signals that will get through the filters. There will be only one range where all the filters overlap.

 

// Example 
// frequencies = [8, 15, 14, 16, 21]
// filtersRanges = [[10, 17], [13, 15], [13, 17]]

// The range that all of the filters allow through is from 13 to 15, inclusive. The 2 frequencies that will pass through all filters have frequencies of 15 and 14. Return 2.

// Function Description
// Complete the countSignals function in the editor below.

// countSignals has the following parameter(s):
//     int frequencies[n]: the frequencies of the signals sent through the filters
//     int filterRanges[m][2]: the lower and upper frequency bounds for each filter
// Returns
//     int: the number of signals that pass through all filters

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ frequencies[i] ≤ 109
// 1 ≤ m ≤ 105
// 1 ≤ filterRanges[j][k] ≤ 109

/*
 * Complete the 'countSignals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY frequencies
 *  2. 2D_INTEGER_ARRAY filterRanges
 */

function countSignals(frequencies, filterRanges) {
    // Write your code here
    let low = -Infinity;
    let high = Infinity;
    for (let filters of filterRanges) {
        let leftBound = filters[0];
        let rightBound = filters[1];
        if (leftBound > low) low = leftBound;
        if (rightBound < high) high = rightBound;
    }
    let count = 0
    for (let freq of frequencies) {
        if (freq >= low && freq <= high) count++;
    }
    return count;
}