// The stocks of a company are being surveyed to analyze the net profit of the company over a period of 
// several months. For an analysis parameter k, an interval of k consecutive months is said to be highly 
// profitable if the values of the stock prices are strictly increasing for those months. Given the stock 
// prices of the company for n months and the analysis parameter k, find the number of highly profitable months.

// Example
// stockPrices = [5, 3, 5, 7, 8]
// k = 3

// These are the intervals of k months in which the stock prices are strictly increasing:
// Hence the answer is 2.

// Function Description

// Complete the function countHighlyProfitableMonths in the editor below.

 

// countHighlyProfitableMonths has the following parameters:
//     int stockPrices[n]: the stock prices for n months
//     int k: the analysis parameter

// Returns
//     int: the number of highly profitable months

// Constraints
// 1 ≤ k ≤ n ≤ 2 · 10^5
// 1 ≤ stockPrices[i] ≤ 10^9

/*
 * Complete the 'countHighlyProfitableMonths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY stockPrices
 *  2. INTEGER k
 */

function countHighlyProfitableMonths(stockPrices, k) {
    // Write your code here
    
    if (k === 1) return stockPrices.length;
    
    let [intervals, left, right] = [0, 0, 1];
    
    while (right < stockPrices.length) {
     
        if (stockPrices[right] <= stockPrices[right-1]) {
            left = right;
        }
        
        if (right - left + 1 === k) {
            left++;
            intervals++;
        }
        right++;
    }
    return intervals;
}

