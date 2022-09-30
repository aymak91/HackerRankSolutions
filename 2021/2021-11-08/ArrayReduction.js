// Array Reduction

// There is an array of n integers called num. The array can be reduced by 1 element by performing a move. 
// Each move consists of the following three steps:

// Pick two different elements num[i] and num[j], i ≠ j.
// Remove the two selected elements from the array.
// Add the sum of the two selected elements to the end of the array.
 

// Each move has a cost associated with it: the sum of the two elements removed from the array during the move. 
// Calculate the minimum total cost of reducing the array to one element.

 
// Example
// num = [4,6,8]

// Remove 4 and 6 in the first move at a cost of 4 + 6 = 10, and the resultant array is num' = [8,10].
// Remove 8 and 10 in the second move at a cost of 8 + 10 = 18, and the resultant array is num'' = [18].

// The total cost of reducing this array to one element using this sequence of moves is 10 + 18 = 28. This is just one set of possible moves. 
// For instance, one could have started with 4 and 8. Then 4 + 8 = 12, num' = [6, 12], 6 + 12 = 18, num'' = [18], cost = 12 + 18 = 30.

// Function Description 
// Complete the function reductionCost in the editor below.

// reductionCost has the following parameter(s):
//     int num[n]:  an array of integers

// Return
//     int:  the minimum total cost of reducing the input array to one element

// Constraints
// 2 ≤ n ≤ 104
// 0 ≤ num[i] ≤ 105

function reductionCost(num) {

    // sort least to greatest so that we can get smaller sums to return
    num.sort((a,b) => a - b);

    let cost = 0;

    // run loop until all elements synthesize 
    while (num.length > 1) {
        num.sort((a,b) => a - b);

        // grab first two numbers and remove them from the array
        let first = num.shift();
        let second = num.shift();

        let current = first + second;
        cost += current;

        // if the array is empty, stop
        if (num.length === 0) break;

        num.push(current);
    }

    return cost
}