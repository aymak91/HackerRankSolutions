// For two positive integers, lo and hi, and a limit k, find two integers, a and b, satisfying the following criteria. Return the value of a⊕ b. The ⊕ symbol denotes the bitwise XOR operator.
// lo ≤ a < b ≤ hi
// The value of a ⊕ b is maximal for a ⊕ b ≤ k.
 
// Example
// lo = 3
// hi = 5
// k = 6:

// a	b	a ⊕ b
// 3	4	7
// 3	5	6
// 4	5	1
 
// The maximal useable XORed value is 6 because it is the maximal value that is less than or equal to the limit k = 6.

// Function Description 
// Complete the function maxXor in the editor below. The function must return an integer denoting the maximum possible value of a ⊕ b for all a ⊕ b ≤ k.

// maxXor has the following parameter(s):
//     int lo:  an integer
//     int hi:  an integer
//     k:  an integer

// Constraints
// 1 ≤ lo < hi ≤ 10^4
// 1 ≤ k ≤ 10^4

/*
 * Complete the 'maxXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER lo
 *  2. INTEGER hi
 *  3. INTEGER k
 */

function maxXor(lo, hi, k) {
    // Write your code here

    let max = 0;
    
    for (let i=lo; i<hi+1; i++) {
        for (let j=i+1; j<hi+1; j++) {
            const xor = i^j;
            if (max < xor && xor <= k) {
                max = xor;
                
                if (max === k) break;
            }
            if (max === k) break;
        }
    }
    return max;
}

