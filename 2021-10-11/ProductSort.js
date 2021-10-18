// In a warehouse, a manager would like to sort the items in the stock. Given an array of n item values, sort the array in ascending order, first by the number of items with a certain value,  then by the values themselves.
 
// Example
// n = 6
// items = [4, 5, 6, 5, 4, 3]

// There are 2 values that occur twice: [4, 4, 5, 5].
// There are 2 values that occur once: [3, 6].
// The array of items sorted by quantity and then by value in ascending order is [3, 6, 4,  4, 5, 5]
 
// Function Description 
// Complete the function itemsSort in the editor below.

 // itemsSort has the following parameter(s):
//     int items[n]:  an array of integers to sort

// Returns:
//         int[n]: An array of integers sorted as described.

 

// Constraints

// 1 ≤ n ≤ 2 × 105
// 1 ≤ items[i] ≤ 106
 

/*
 * Complete the 'itemsSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY items as parameter.
 */

function itemsSort(items) {
    // Write your code here
    
    let occurances = new Map();

    for (let i = 0; i < items.length; i++) {
        
        if (!occurances.get(items[i])) occurances.set(items[i], 0);
        occurances.set(items[i], occurances.get(items[i]) + 1);
    }

    items.sort((a, b) => (occurances.get(a) - occurances.get(b)) || (a - b));
    return items;
}