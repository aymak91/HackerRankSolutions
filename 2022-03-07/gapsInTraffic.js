// Given a 2 lane road with n positions and a total number of m cars moving from left to right, from a start position to a finish position, determine the largest gap in positions of all cars, without regard to lanes.

// Example 
// n = 10
// start = [1, 2, 5, 8]
// finish = [2, 2, 6, 10]

// The following is a graphical representation of a snapshot of the cars on the road. start and finish mark the positions of the rear and front of each car. The length of the road is n.

// PS Example
// Positions that contain cars are gray, and positions that are open are striped green.
 
// The diagram above depicts a road n = 10 units in length with m = 4 cars :

// The first car spans from position start[0] = 1 to position finish[0] = 2
// The second car spans from position start[1] = 2 to position finish[1] = 2
// The third car spans from position start[2] = 5 to position finish[2] = 6
// The fourth car spans from position start[3] = 8 to position finish[3] = 10
// There are gaps at positions 3-4 and 7.  The largest gap between cars is 2.
 
// Function Description 
// Complete the function widestGap in the editor below.

// widestGap has the following parameter(s):
//     int n:  the length of the road section
//     int start[m]:  the positions of the rears of each car
//     int finish[m]:  the positions of the fronts of each car

// Returns
//    int: the length of the longest gap between cars.

// Constraints
// 1 ≤ n ≤ 109
// 1 ≤ m ≤ 105
// 1 ≤ start[i] ≤ finish[i] ≤ n, where 0 ≤ i < m.
 
/*
 * Complete the 'widestGap' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY start
 *  3. INTEGER_ARRAY finish
 */

function widestGap(n, start, finish) {
    let lanes = []
    let i = 0;
    while (i < start.length) {
        lanes.push([start[i], finish[i]])
        i++
    }
    lanes = lanes.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        return a[1] - b[1]
    })

    lanes.push([n + 1, n + 1])
    let maxFinish = 0
    let maxGap = 0
    let j = 0;
    while (j < lanes.length) {
        let strt = lanes[j][0]
        let end = lanes[j][1]
        if (maxFinish < strt) maxGap = Math.max(maxGap, strt - maxFinish - 1)
        maxFinish = Math.max(maxFinish, end)
        j++
    }
    
    return maxGap
}
