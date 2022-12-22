// Consider an array of integers and a non-zero positive starting value x. A running sum is calculated by adding each element of 
// the array to x consecutively. Determine the minimum value of x such that the running sum is at least 1 after every iteration.

// Examples

// arr = [-4, 3, 2, 1]

// Let starting value x = 5

// Running sums:
// 5 + (-4) = 1
// 1 + 3 = 4
// 4 + 2 = 6
// 6 + 1 = 7.

// There is no value smaller than 5 that satisfies the condition.

// arr = [3, -6, 5, -2, 1]
// If the starting value is 4, running sums are [7, 1, 6, 4, 5]. This is the minimum starting value.

// arr = [5]
// The starting value of x is 1.

// Function Description 
// Complete the minStart function in the editor below. 

// minStart has the following parameter(s):
//     int arr[n]: an array of integers to sum

// Return
//     long:  the minimum initial value

// Constraints

// 1 ≤ n ≤ 10^5
// -10^6 ≤ arr[i][ ]≤ 10^6

/*
 * Complete the 'minStart' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minStart(nums) {
    // Write your code here


    var minVal = 0;
    var total = 0;

    for (var i = 0; i < nums.length; ++i) {
        total += nums[i];
        minVal = Math.min(minVal, total);
    }

    return -minVal + 1;
}

