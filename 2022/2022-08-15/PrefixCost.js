// Consider an array arr of length n. The the cost of the array is defined as the sum of the number of distinct elements over all prefixes of the array. 
// For example, the cost of [1, 2, 1] is equal to distinct elements in [1] + distinct elements in [1, 2] + distinct elements in [1, 2, 1] = 1 + 2 + 2 = 5.

// Find the minimum cost among all possible permutations of arr.

// Note: A permutation is a rearrangement of elements of an array into a new array. For example, there are 24 permutations of array [1, 2, 3, 4]. 
// Some of them are [2, 1, 4, 3], [4, 1, 2, 3] and [1, 4, 2, 3]. 

 
// Example
// n = 5
// arr = [2,2,3,1,1]

// Consider the permutation [2, 2, 1, 1, 3]

// The numbers of distinct elements in prefix [2], [2,2], [2,2,1], [2,2,1,1] and [2,2,1,1,3] are 1, 1, 2, 2, and 3 respectively.
// The cost of [2,2,1,1,3] = 1+1+2+2+3 = 9.
 
// There are multiple permutations to arrive at a cost of 9, but 9 is the minimum cost among all permutations. Return 9.

// Function Description
// Complete the function getMinimumCost in the editor below.

// getMinimumCost has the following parameter:
//     int arr[n]:  the array to analyze


// Returns
//    long int: the minimum cost among all possible permutations


// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ arr[i] ≤ 10^5

/*
 * Complete the 'getMinimumCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getMinimumCost(arr) {
    // Write your code here

    let frequencies = {};
    
    for (let ele of arr) {
        if (frequencies[ele] === undefined) frequencies[ele] = 0;
        frequencies[ele]++;
    }
    
    let sortedFrequencies = Object.values(frequencies).sort((a,b) => b-a);
    
    let result = 0;
    let i = 1;
        
    for (let freq of sortedFrequencies) {
        result += freq * i;
        i++;
    }
    return result;
}

