// There are n bricks arranged in a row at positions numbered from 1 through n, inclusive. There is an array, newtons[n], that contains an integer indicating the number of newtons required to smash a brick.  (A newton is a unit of force.) 

// There are two hammers, one big and one small.  The big hammer can smash any brick with one blow.  The small hammer reduces the newtons required by 1 for each blow to a brick.  For example, a brick requires 3 newtons of force.  It will take 1 blow with the big hammer, or 3 blows with the small hammer to smash it.  There is a limit to how many times the big hammer can be used.  

// Determine 3 values:
// the minimum number of blows to smash all the bricks
// the 1-based indices of the bricks smashed by the big hammer sorted ascending
// the 1-based indices of the bricks smashed by the small hammer sorted ascending
 
// Return the values as a 2-dimensional integer array, [[total hits], [big hammer hits], [small hammer hits]]. If a hammer is not used, its index array should be [-1].

// Example
// bigHits = 0
// newtons = [2]

// The big hammer cannot be used. The small hammer takes 2 blows to smash the single brick at index 1.  The return array is [[2], [-1], [1]]. 

// bigHits = 4
// newtons = [3, 2, 5, 4, 6, 7, 9]

// In this case, it is best to use the big hammer on bricks at sorted indices [3, 5, 6, 7], using 4 hits to smash them all. The small hammer is used on sorted indices [1, 2, 4] which have newtons of 3, 2, and 4. It takes a total of 3 + 2 + 4 = 9 hits with the small hammer. The total blows required = 4 + 9 = 13.  The return array is [[13], [3, 5, 6, 7], [1, 2, 4]].

// Function Description
// Complete the function smashTheBricks in the editor below.

// smashTheBricks has the following parameters:
//     int bigHits:  the maximum blows with the big hammer
//     int newtons[n]:  the newtons required to smash each brick

// Returns
//     long [[1],[p][q]]: in the form [[ total hits], [sorted indices for big hammer hits], [sorted indices for small hammer hits]]

// Constraints
// 1 ≤ n ≤ 2 x 10^5
// 0 ≤ bigHits ≤ 2 x 10^5
// 1 ≤ newtons[i] ≤ 10^9
// Elements in newtons[n] are distinct.

/*
 * Complete the 'smashTheBricks' function below.
 *
 * The function is expected to return a 2D_LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER bigHits
 *  2. INTEGER_ARRAY newtons
 */

function smashTheBricks(bigHits, newtons) {

    let bricks = newtons.map((x, i) => [x,i+1]);
    
    bricks.sort((a,b) => b[0]-a[0]);
    
    let solution = [[],[],[]];
    let totalHits = 0;
    let i = 0;
    
    while (i < bricks.length) {
        if (bigHits > 0) {
            bigHits--;
            solution[1].push(bricks[i][1])
            totalHits++;
        } else {
            solution[2].push(bricks[i][1])
            totalHits += bricks[i][0];
        }
        i++;
    }
    solution[0].push(totalHits);
    
    
    for (let i=0; i<solution.length; i++) {
        solution[i].sort((a,b) => a-b);
        if (solution[i].length === 0) solution[i].push(-1);
    }
    
    return solution;
    
}

