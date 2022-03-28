// A salesperson must sell n items in a bag with random IDs. The salesperson can remove as many 
// as m items from the bag. Determine the minimum number of different IDs the final bag can contain 
// after performing, at most, m deletions.

// Example
// n = 6 
// ids = [1, 1, 1, 2, 3, 2]
// m = 2 

// Two possible actions that give the minimum 2 different IDs:

// Remove 2 items with ID = 2  and the final bag will contain item ids' = [1, 1, 1, 3]
// Remove 1 item with ID = 2  and 1 item with ID=3 and the final bag will contain item ids' = [1, 1, 1, 2]
 

// The minimum number of distinct IDs is 2.

// Function Description
// Complete the function deleteProducts in the editor below.

// deleteProducts has the following parameters:
//     int ids[n]:  an array of integers
//     int m: an integer, the maximum number of deletions

// Returns:
//     int: an integer that represents the minimum number of item IDs

// Constraints

// 1 ≤ n ≤ 10^5
// 1 ≤ ids[i] ≤ 10^6
// 1 ≤ m ≤ 10^5

/*
 * Complete the 'deleteProducts' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ids
 *  2. INTEGER m
 */

function deleteProducts(ids, m) {
    // Write your code here
    let hashCount = {};

    for (let i = 0; i < ids.length; i++) {
        if (!hashCount[ids[i]]) hashCount[ids[i]] = 0;
        hashCount[ids[i]]++;
    }

    let sortedIds = Object.keys(hashCount).sort((a, b) => hashCount[a] - hashCount[b]);

    let pointer = 0;
    while (m > 0) {
        if (hashCount[sortedIds[pointer]] === 0) pointer++;
        hashCount[sortedIds[pointer]]--;
        m--;
    }


    const unique = Object.values(hashCount).filter(val => val > 0);
    return unique.length;
}

