// Given an array of integers, amount[n], each amount[i] represents the amount of money required by person i.  
// There are n people numbered 1 through n standing in an ATM queue in increasing order.  A person can withdraw 
// at most k units of currency at one time. Return an array of people numbers in the order that they leave the queue, 
// i.e. the order their needed amounts have been withdrawn.

// Call the cumulative amount of money withdrawn current, and the money required total.
// Repeat the following process until the queue is empty :

// 1. If total - current ≤ k
    // 1. withdraw (total - current)
    // 2. leave the queue
    // 3. store the person's i in the return array
// 2. Otherwise
    // 1. withdraw k
    // 2. current = current + k
    // 3. move to the back of the queue
 
// Example 
// k = 2
// n = 3
// amount = [2, 5, 1]

// The initial queue, Q = [1, 2, 3].
// Person 1 needs to withdraw amount[1] = 2.  Since k = 2, the money can be withdrawn and person 1 leaves the queue. Q = [2, 3], result = [1]
// Person 2 needs to withdraw amount[2] = 5, withdraws 2, current = 0 + 2 = 2, and moves to the back of the queue. Q = [3, 2], result = [1]
// Person 3 needs to withdraw amount[3] = 1, withdraws 1 and leaves the queue.  Q = [2], result = [1, 3]
// Person 2 still needs 5 - 2 = 3.  Withdraw 2, current = 2 + 2 = 4, move to the back of the queue.  Q = [2], result = [1, 3]
// Person 2 still needs 5 - 4 = 1, withdraws 1 and leaves the queue. Q = [], result = [1, 3, 2]

// Return the result array, [1, 3, 2].

// Function Description
// Complete the function getFinalOrder in the editor below.

// getFinalOrder has the following parameter(s):
//     int k:  the maximum withdrawal amount
//     int amount[n]:  amounts needed per person

// Returns
//     int[n]: the order in which people leave the queue

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ k ≤ 10^6
// 1 ≤ amount[i] ≤ 10^9

/*
 * Complete the 'getFinalOrder' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY amount
 */

// O(n^k) where n is amount.length, passed 10/15 test cases
function getFinalOrder(k, amount) {
    // Write your code here
    
    const queue = [];
    const completionOrder = [];
    
    for (let i=0; i<amount.length; i++) {
        queue.push({person: i+1, value: amount[i]});
    }
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        current.value -= k;
        
        if (current.value <= 0) {
            completionOrder.push(current.person)
            continue;
        }
        queue.push(current);
    }
    
    return completionOrder;

}

// O(nlogn) due to sorting where n is amount.length, passes all cases
function getFinalOrder(k, amount) {
    // Write your code here
    
    const completionOrder = {};
    
    for (let i=0; i<amount.length; i++) {
        const count = Math.ceil(amount[i]/k);
        completionOrder[i+1] = count;
    }
    
    return Object.keys(completionOrder).sort((a, b) => completionOrder[a] - completionOrder[b])
}



