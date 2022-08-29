// There are two arrays of integers, arr1 and arr2. One move is defined as an increment or decrement of one 
// element in an array. Determine the minimum number of moves to match arr1 with arr2. No reordering of the 
// digits is allowed.

 

// Example
// arr1 = [123, 543]
// arr2 = [321, 279]

// Match arr1[0]=123 with arr2[0]=321.
// Increment 1 twice to get 3 (2 moves)
// Decrement 3 twice to get 1 (2 moves).
// 4 moves are needed to match 123 with 321.
// Match arr1[1]=543 with arr2[1]=279.
// Decrement 5 three times to get 2 (3 moves)
// Increment 4 three times to get 7 (3 moves)
// Increment 3 six times to get 9 (6 moves).
// 12 moves are needed to match 543 with 279.
// 16 total moves are needed to match the arrays arr1 and arr2.
 
// Function Description 
// Complete the function minimumMoves in the editor below.

// minimumMoves has the following parameter(s):
//    int arr1[n]:  array to modify
//    int arr2[n]:  array to match

// Returns:
//     int: te minimum number of moves to match arr1 with arr2

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ arr1[i], arr2[i] ≤ 10^9
// The lengths of arr1 and arr2 are equal, |arr1| = |arr2|.
// The elements arr1[i] and arr2[i] have an equal number of digits.

/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

function minimumMoves(arr1, arr2) {
    // Write your code here
    
    let actions = 0;
    for (let i=0; i<arr1.length; i++) {
        const num1 = arr1[i].toString();
        const num2 = arr2[i].toString();
        
        for (let j=0; j<num1.length; j++) {
            actions += Math.abs(parseInt(num1[j]) - parseInt(num2[j]));
        }
        
    }
    return actions;

}