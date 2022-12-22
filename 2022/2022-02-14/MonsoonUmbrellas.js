// Umbrellas are available in different sizes that are each able to shelter a certain number of people. Given the number of people
//  needing shelter and a list of umbrella sizes, determine the minimum number of umbrellas necessary to cover exactly the number
//   of people given and no more. If there is no combination of umbrellas of the same or different sizes that covers exactly that
//    number of people, return -1. 

// Example
// requirement = 5
// sizes = [3, 5]

// One umbrella can cover exactly 5 people, so the function should return 1.

// Example
// requirement = 8
// sizes = [3, 5]

// It is possible to use 1 umbrella of size 3 and 1 umbrella of size 5 to cover exactly 8 people, so the function should return 2.

// Example
// requirement = 7
// sizes = [3, 5]

// There is no combination of umbrellas that cover exactly 7 people, so the function should return -1.

// Function Description 
// Complete the function getUmbrellas in the editor below.

// getUmbrellas has the following parameter(s):
//     int requirement:  the number of people to shelter
//     int sizes[n]:  an array of umbrella sizes available
// Returns:
//     int: the minimum number of umbrellas required to cover exactly requirement people, or -1 if it is impossible
// Constraints
// 1 ≤ requirement, m, sizes[i] ≤ 1000
 

/*
 * Complete the 'getUmbrellas' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER requirement
 *  2. INTEGER_ARRAY sizes
 */

function getUmbrellas(requirement, sizes) {
    // Write your code here

    // Solve for 0 up to the requirement
    let dp = new Array(requirement+1).fill(Infinity);
    // base case
    dp[0] = 0;
    
    for (let i=1; i<=requirement; i++) {
        // Solve for dp[i] for each possible size
        for (let size of sizes) {
            if (i - size >= 0) {
                // See graphic for explanation of DP setup
                dp[i] = Math.min(dp[i], 1 + dp[i-size]);
            }
        }
    }
    if (dp[requirement] != Infinity) return dp[requirement] ;
    return -1;
}
