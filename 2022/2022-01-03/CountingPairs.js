// Given an integer k and a list of integers, count the number of distinct valid pairs of integers (a, b) in the list for which a + k = b. 
// Two pairs of integers (a, b) and (c, d) are considered distinct if at least one element of (a, b) does not also belong to (c, d). 
// Note that the elements in a pair might be the same element in the array. An instance of this is below where k = 0.

// Example
// n = 4
// numbers = [1, 1, 1, 2]
// k = 1

// This array has three different valid pairs: (1, 1) and (1, 2) and (2, 2). For k = 1, there is only 1 valid pair which satisfies a + k = b: the pair (a, b) = (1, 2).

// n = 2
// numbers = [1, 2]
// k = 0

// There are three valid pairs: (1, 1), (2, 2) and (1, 2). For k = 0, two valid pairs satisfy a + k = b: 1 + 0 = 1 and 2 + 0 = 2.

// Function Description 
// Complete the function countPairs in the editor below.

// countPairs has the following parameter(s):
//     int numbers[n]:  array of integers
//     int k: target difference

// Returns
//     int: number of valid (a, b) pairs in the numbers array that have a difference of k

// Constraints
// 2 ≤ n ≤ 2 × 105
// 0 ≤ numbers[i] ≤ 109, where 0 ≤ i < n
// 0 ≤ k ≤ 109

function countPairs(numbers, k) {
    // Write your code here

    let nums = new Set()
    let pairs = new Set()
    
    for (let i = 0; i < numbers.length; i++) nums.add(numbers[i]);
    
    for (let num of nums) {
        let complement = num + k
        let pair = [num, complement].sort((a, b) => a - b)
        if (nums.has(complement)) pairs.add(pair);
    }
    
    return pairs.size
}