// Given an array arr of n positive integers, the following operations can be performed 0 or more times:

// Choose an index i where 0 ≤ i < n
// choose 2 integers, x and y, such that x + y = arr[i]
// replace arr[i] with two elements, the two values x and y

// Determine the minimum number of operations required to sort the array.

// Example
// n = 3
// arr = [3, 4, 3]

// The array can be sorted in 2 operations:
// Choose i = 0, arr[0] = 3.  Choose x = 1 and y = 2. Replace arr[0] with x and y.  arr' = [1, 2, 4, 3].
// Choose i = 2, arr[2] = 4.  Choose x = 2 and y = 2. Replace arr[2] and arr' = [1, 2, 2, 2, 3].
// Return 2.

// Function Description
// Complete the function getMinimumOperations in the editor below.

// getMinimumOperations has the following parameter:
//     int arr[n]:  the array to sort

// Returns
//     long int:  the minimum number of operations to sort the array

 

// Constraints

// 1 ≤ n ≤ 10^5
// 1 ≤ arr[i] ≤ 10^9
// It is always possible to sort the array with these operations.

/*
 * Complete the 'getMinimumOperations' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getMinimumOperations(arr) {
    // Write your code here
    
    let splits = 0;
    let prev = arr[arr.length-1];
    
    for (let i=arr.length-2; i>=0; i--) {
        if (arr[i] <= prev) {
            prev = arr[i];
        } else {
            const parts = Math.ceil(arr[i]/prev);
            splits += parts-1;
            prev = Math.floor(arr[i]/parts);
        }
    }
    
    
    return splits;

}