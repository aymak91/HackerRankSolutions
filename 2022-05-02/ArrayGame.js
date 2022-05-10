// Given an array of integers, determine the number of moves to make all elements equal. 
// Each move consists of choosing all but 1 element and incrementing their values by 1.

// Example
// numbers = [3, 4, 6, 6, 3]

// Choose 4 of the 5 elements during each move and increment each of their values by one. Indexing begins at 1. It takes 7 moves as follows:

//                						    Unchanged
// 	   Iteration			Array   	    element's index
// 		0		[ 3,  4,  6,  6,  3]            
// 		1		[ 4,  5,  7,  6,  4]		3
// 		2		[ 5,  6,  7,  7,  5]		2
// 		3		[ 6,  7,  8,  7,  6]		3
// 		4 		[ 7,  8,  8,  8,  7]		2
// 		5		[ 8,  9,  9,  8,  8]		3
// 		6		[ 9,  9, 10,  9,  9]		1
// 		7		[10, 10, 10, 10, 10]		2
 

// Function Description 
// Complete the function countMoves in the editor below.

// countMoves has the following parameter(s):
//     int numbers[n]:  an array of integers

// Returns:
//     long:  the minimum number of moves required

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ numbers[i] ≤ 10^6
 
/*
 * Complete the 'countMoves' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function countMoves(numbers) {
    // Write your code here
    let min = Math.min(...numbers);
    let moves = 0;
    
    for (let num of numbers) {
        moves += num - min;
    }
    
    return moves;

}
// [ 3,  4,  6,  6,  3]  
// [3,4,5,6,3]1
// [3,4,5,5,3]2
// [3,4,4,5,3]3
// [3,4,4,4,3]4
// [3,3,4,4,3]5
// [3,3,3,4,3]6
// [3,3,3,3,3]7

