// Slow and Fast Pointers

// Process an array, arr, using two pointers, P1 and P2, and an integer, segSize. 
// Pick an integer to test for segSize, then start with P1 = 0 and P2 = 1. Compare the 
// value at arr[P1] with all of the elements in a subarray. The subarray starts at arr[P2] and 
// includes segSize elements or it reaches the end of arr. If arr[P1] is greater or equal in all cases, 
// increment P1 by 1, increment P2 by segSize, and repeat the process. Do this until the subarray including the last 
// element of arr has been processed. Determine the minimum value of segSize that allows the entire array to be processed. 
// Return this minimum step value or -1 if it is not possible.

// Example:
// arr = [11, 9, 10, 8, 10, 9]


// Try: segSize = 1
// P1   P2   arr[P1] Subarray   Continue
// 0    1    11      [9]        y
// 1    2    9       [10]       n    (fails because 10 > 9)

// Try: segSize = 2
// P1   P2   arr[P1] Subarray   Continue
// 0    1    11      [9, 10]    y
// 1    3    9       [8, 10]    n    (fails because 10 > 9)

// Try: segSize = 3
// P1   P2   arr[P1] Subarray   Continue 
// 0    1    11      [9, 10, 8]    y 
// 1    4     9      [10, 9]       n    (fails because 10 > 9)

// Try: segSize = 4
// P1   P2   arr[P1] Subarray       Continue 
// 0    1    11      [9, 10, 8, 10]    y 
// 1    5    9       [9]               y

// All array elements were processed, so the minimum segSize = 4.
 

// Function Description
// Complete the function dualSpeed in the editor below. The function must return a single integer, which is the answer to the problem.

// dualSpeed has the following parameter:
//     arr[arr[0],...arr[n-1]]:  an array of integers

// Constraints
// 1 < n ≤ 5000
// 1 ≤ arr[i] ≤ 109

function dualSpeed(arr) {
    // Write your code here

    let P1 = 0;
    let P2 = 1;
    let segSize = 1;

    while (segSize <= arr.length) {
        if (segSize === arr.length) break;

        while (P2 < arr.length) {

            // iterate through subarray to try to find whether arr[P1] >= anything in the subarray
            // iterate until end of subarray or you reach the limit of segSize
            for (let i = P2; i < arr.length && i < P2 + segSize; i++) {

            }
        }

    }

    return -1;

}