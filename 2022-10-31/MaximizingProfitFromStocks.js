// Your algorithms have become so good at predicting the market that you now know what the share price of Silly Purple Toothpicks Inc. (SPT) 
// will be for a number of minutes going forward. Each minute, your high frequency trading platform allows you to either buy one share of SPT, sell 
// any number of shares of SPT that you own, or not make any transaction at all. Find the maximum profit you can obtain with an optimal trading strategy.

// Purchases are negative and sales are positive cash flows in the following equations. For example, if predicted prices over the next 
// n = 6 minutes are prices = [3, 4, 5, 3, 5, 2], one way to the best outcome is to purchase a share in each of the first 2 minutes for cash flows -3 + -4 = -7, 
// then sell them at the third minute for 2 * 5 = 10. Purchase a share in the 4th minute for 3 and sell it in the 5th minute for 5. Total profits are -3 - 4 + 10 - 3 + 5 = 5. 
// Another way to the same outcome is to purchase a share in each of the 1st, 2nd and 4th minutes for -3 - 4 - 3 = -10, do nothing at minute 2 then sell all three shares at 5 (total 3 * 5 = 15) 
// on the 5th minute, again for a total profit of -10 + 15 = 5. There is no reason to purchase in the last minute as there is no time to sell.


// Function Description
// Complete the maximumProfit function in the editor below. The function must return a long integer that denotes the maximum possible profit.


// maximumProfit has the following parameter:
//     price: an array of n integers that denote the stock prices at minutes 1 through n.

 

// Constraints
// 1 ≤ t ≤ 10
// 1 ≤ n ≤ 5x10^5
// 1 ≤ price[i] ≤ 10^5

/*
 * Complete the 'maximumProfit' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY price as parameter.
 */

function maximumProfit(price) {
    // Write your code here

    let max = -Infinity;
    let profit = 0;
    
    for (let i=price.length-1; i>=0; i--) {
        if (max >= price[i]) {
            profit += max - price[i];
        } else {
            max = price[i];
        }
    }
    
    return profit;
}

