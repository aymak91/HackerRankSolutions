// Given an array of numbers, find the index of the smallest array element (the pivot), 
// for which the sums of all elements to the left and to the right are equal. 
// The array may not be reordered.

// Example
// arr=[1,2,3,4,6]

//     -the sum of the first three elements, 1+2+3=6. The value of the last element is 6. 
//     -Using zero based indexing, arr[3]=4 is the pivot between the two subarrays.
//     -The index of the pivot is 3.
 

// Function Description 
// Complete the function balancedSum in the editor below.

// balancedSum has the following parameter(s):
//     int arr[n]:  an array of integers

// Returns:
//     int: an integer representing the index of the pivot

// Constraints

// 3 ≤ n ≤ 10^5
// 1 ≤ arr[i] ≤ 2 × 10^4, where 0 ≤ i < n
// It is guaranteed that a solution always exists.

/*
 * Complete the 'balancedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function balancedSum(arr) {
    // Write your code here

    let leftSum = 0;
    let rightSum = 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {
        if (leftSum < rightSum) {
            leftSum += arr[leftIdx];
            leftIdx++;
        } else {
            rightSum += arr[rightIdx];
            rightIdx--;
        }
    }
    return leftIdx;
}