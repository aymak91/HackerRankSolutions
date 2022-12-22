// Ancient creatures from the sea have met up in Tokyo for a battle. The first order of business is to get at one another, but they are blocked by a row of buildings. 
//Determine the minimum blows the two will have to rain down on the buildings in order to destroy them all.
// Each of the buildings is arranged in a row, and they are all adjacent. The opponents start at opposite ends. For any one blow, all buildings exposed to the creature 
// that are in non-decreasing height will collapse. For the creature at the left, that means non-decreasing toward the right, and vice versa.

 

// Example
// height = [1, 2, 3, 4, 3, 2, 3, 2, 1]

// From the left, the creature can knock down ([1, 2, 3, 4], [3], [2, 3], [2], [1]). From the right (imagine the array is reversed), the creature can 
// knock down ([1, 2, 3], [2, 3], [4], [3], [2], [1]). The minimum blows are obtained as from the left: ([1, 2, 3, 4]) and from the right: ([1, 2, 3], [2, 3]) for a total of 3 moves.

// Function Description 
// Complete the function getMinimumBlows in the editor below.

// getMinimumBlows has the following parameter(s):
//     int height[n]:  an array of integers

// Returns:
//      int : the minimum number of blows that must be used to destroy all buildings

// Constraints
// 1≤ n ≤ 10^5
// 1 ≤ height[i] ≤ 10^5, where 0 ≤ i < n.

/*
 * Complete the 'getMinimumBlows' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY height as parameter.
 */


function getMinimumBlows(height) {
    if (height.length < 3) return 

    const minHit = new Array(height.length) 

    let hits = 0 
    let currHeight = 0 
    for (let i = 0; i < height.length; i++) {
        let building = height[i] 
        if (!hits || building < currHeight) hits++
        currHeight = building
        minHit[i] = hits
    }

    hits = 0 
    currHeight = 0
    for (let i = height.length - 1; i >= 0; i--) {
        let building = height[i] 
        if (!hits || building < currHeight) hits++
        currHeight = building 
        minHit[i] += hits
    }

    return Math.min(...minHit)
}