// A sales executive needs to simplify an assigned sales task. The task is to sell the items given to her in a bag, where each item has an ID number.
// It is easier to sell items with the same ID numbers. The sales executive also decides to remove some items from the bag. The largest number of 
// items that she can remove is also known to her. Find the minimum number of different IDs the final bag can contain after removing the allowed number of items. 

// For example, she starts with a bag that contains the following n = 6 items: ids = [1,1,1,2,2,3] and she can remove m = 2 items. If she removes 2 of item 1, 
// she will still have items of all three types. She could remove 2 of item 2, and have ids = [1,1,1,3] with 2 discrete item types or remove 1 each of types 2 
// and 3 leaving ids = [1,1,1,2].  Either way, there are 2 item types left.

 

// Function Description 
// Complete the function deleteProducts in the editor below. The function must return an integer that denotes the minimum number of different IDs the final bag can contain.

// deleteProducts has the following parameters:
//     ids: an array of n integers that denotes the ID numbers of all items
//     m: integer that denotes the maximum number of items that can be deleted from the bag.

 

// Constraints

// 1 ≤ n ≤ 100000
// 1 ≤ ids[i] ≤ 1000000
// 1 ≤ m ≤ 100000

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

    let hash = {};
    
    for (const id of ids) {
        if (!hash[id]) hash[id] = 0;
        hash[id]++;
    }

    let values = Object.values(hash).sort((a,b) => a-b);
    
    while (m >= values[0] && values.length > 0) {
        m -= values[0];
        values.shift();
    }
    
    return values.length;
}

