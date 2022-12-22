// Fountains are installed at every position along a one-dimensional garden of length n. Array locations[] represents the 
// coverage limit of these fountains. The ith fountain (where 1 ≤ i ≤ n)  has a coverage limit of locations[i] that can 
// range from the position max( (i - locations[i]), 1 ) to min( (i + locations[i] ), n ). In other words, the fountains 
// do not reach outside the boundaries of the garden. In the beginning, all the fountains are switched off. Determine the 
// minimum number of fountains that need to be activated to cover the n length garden by water.

// Example
// n = 3
// locations[] = {1, 2, 1}, then

 
// For position 1: locations[1] = 1, max( (1 - 1), 1) to min( (1+1), 3) gives range = 1 to 2
// For position 2: locations[2] = 2, max( (2 - 2), 1) to min( (2+2), 3) gives range = 1 to 3
// For position 3: locations[3] = 1, max( (3 - 1), 1) to min( (3+1), 3) gives range = 2 to 3


// For the entire length of this garden to be covered, only the fountain at position 2 needs to be activated.  

// Function Description
// Complete the function fountainActivation in the editor below.

 
// fountainActivation has the following parameter:
//     int locations[n]:  the fountain locations

// Returns
//     int: the minimum number of fountains that must be activated

// Constraints
// 1 ≤ n ≤ 10^5
// 0 ≤ locations[i] ≤ min( n,100) (where 1 ≤ i ≤ 10^5)

/*
 * Complete the 'fountainActivation' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY locations as parameter.
 */

// Leetcode equivalent (edge case for 0s is different): 
// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
// Prerequisites:
// https://leetcode.com/problems/jump-game/
// https://leetcode.com/problems/jump-game-ii/

function fountainActivation(locations) {
    // Write your code here

    const n = locations.length;
    // change the data so that we only need to think of the water flowing in 1 direction
    const maxDistances = new Array(n).fill(0);
    for (let i = 0; i < locations.length; i++) {
        const start = Math.max(i + 1 - locations[i], 1);
        const end = Math.min(i + 1 + locations[i], n);
        maxDistances[start-1] = Math.max(maxDistances[start-1], end);
    }

    // using the greedy approach jump as fas as possible
    let right = maxDistances[0];
    let nextGreaterRight = right;
    let fountainsNeeded = 1;
    
    for (let i=1; i<n; i++) {
        nextGreaterRight = Math.max(nextGreaterRight, maxDistances[i]);
        if (i===right) {
            fountainsNeeded++;
            right = nextGreaterRight;
        }
    }
    return fountainsNeeded;
    
}

