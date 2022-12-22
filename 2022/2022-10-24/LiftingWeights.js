// An athelete is lifting weights.  The maximum capacity of the barbell is maxCapacity.  Each barbell 
// plate has a weight, weight[i].  Determine the maximum weight of plates that can be added to the 
// barbell without exceeding maxCapacity.

// Example
// weights = [7, 1, 5, 6, 2]
// maxCapacity = 7

// There are 3 ways to reach the maximum weight: {7}, {1, 6} and {2, 5}. Other combinations are either more or less than 7 combined weight.  Return 7.

// Function Description
// Complete the weightCapacity function in the editor below. 

// weightCapacity has two parameters:
//     int weights[n]: each element weights[i] is the weight of a plate
//     maxCapacity: the capacity of the barbell

// Returns
//     int: the maximum weight that can be added

// Constraints
// 1 ≤ n ≤ 42 
// 1 ≤ maxCapacity ≤ 10^9
// 1 ≤ weights[i][ ]≤ 10^9

/*
 * Complete the 'weightCapacity' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY weights
 *  2. INTEGER maxCapacity
 */

function weightCapacity(weights, maxCapacity) {
    weights.sort((a, b) => a - b);
    const memo = {};
    return helper(0, 0);

    function helper(prevWeight, i) {
        if (i >= weights.length) return prevWeight;
        let key = `${prevWeight}-${i}`;
        if (key in memo) return memo[key];
        let curWeight = weights[i];
        if (prevWeight + curWeight > maxCapacity) return prevWeight;

        let option1 = helper(prevWeight + curWeight, i + 1);
        let option2 = helper(prevWeight, i + 1);
        memo[key] = Math.max(option1, option2);
        return memo[key];
    }
}