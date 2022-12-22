// Given an array of bad numbers and a range of integers, determine the longest segment of integers within the range that does not include any bad numbers.

// Example
// n = 6
// badNumbers = [37, 7, 22, 15, 49, 60]
// lower = 3
// upper = 48

// The segments in the range 3 to 48, inclusive, without any bad numbers are: [3, 6], [8, 14], [16, 21], [23, 36] and [38, 48].
// The longest segment is [23, 36] and it is 14 elements long, thus the return value is 14

// Function Description 
// Complete the function goodSegment in the editor below.

// goodSegment has the following parameter(s):
//     int badNumbers[n]:  an array of integers
//     int lower:  an integer, the lower bound, inclusive
//     int upper:  an integer, the upper bound, inclusive

// Returns:
//      int: an integer denoting the length of longest contiguous sequence of natural numbers in the range lower to upper, inclusive, which does not include any bad numbers.

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ badNumbers[i]≤ 109
// badNumbers contains distinct elements. 
// 1 ≤ lower ≤ upper ≤ 109

/*
 * Complete the 'goodSegment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY badNumbers
 *  2. INTEGER lower
 *  3. INTEGER upper
 */

function goodSegment(badNumbers, lower, upper) {
    // Write your code here
    

    badNumbers.push(upper);
    badNumbers.sort((a,b) => a-b);

    let longestSegment = badNumbers[0] - lower - 1; 
    
    for (let i=0; i<badNumbers.length-1; i++) {
        let segment = badNumbers[i+1] - badNumbers[i] - 1;
        if (badNumbers[i+1] === upper) segment++;
        if (badNumbers[i] >= lower && badNumbers[i+1] <= upper && segment > longestSegment) longestSegment = segment;
        if (badNumbers[i+1] > upper) break;
    }
    
    return longestSegment === 1 ? 0 : longestSegment;

}
