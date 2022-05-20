// Alex has a list of items to purchase at a market. The owner offers to discount each item after the first one by the lowest marked 
// price among the prior items. No item's price can be discounted below 0, and the list of items may not be reordered. Calculate the payable amount. 

// Example

// prices = [2, 5, 1, 4]

// Alex pays 2 for the first item since there are no previous items to compare to.

// The second item costs 5 - 2 = 3.
// The third item is free: max(1 - min(2, 5), 0) = max(-1, 0) = 0. 
// The fourth item costs 4 - 1 = 3.

// The total cost to purchase all items is 2 + 3 + 0 + 3 = 8.
// The first item is never discounted and the minimum cost of any item is 0.

 

// Function Description 
// Complete the function calculateAmount in the editor below. The function must return Alex's total cost to purchase all the items.

// calculateAmount has the following parameter(s):
//     int prices[n]:  the original prices of each of the items selected

// Returns:
//     int: the total cost to purchase the items after any discounts are applied

 

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ prices[i] ≤ 10^7, where 0 ≤ i < n

/*
 * Complete the 'calculateAmount' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

function calculateAmount(prices) {
    // Write your code here

    let total = prices[0];
    let discount = prices[0];
    
    for (let i=1; i<prices.length; i++) {
        discount = Math.min(discount, prices[i]);
        total += Math.max(prices[i] - discount, 0);
    }
    
    return total;
}

