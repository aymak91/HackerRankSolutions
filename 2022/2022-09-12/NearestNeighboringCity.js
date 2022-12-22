// A number of cities are arranged on a graph that has been divided up like an ordinary Cartesian plane. Each city is located at an integral (x, y) coordinate intersection. City names and locations are given in the form of three arrays: c, x, and y, which are aligned by the index to provide the city name (c[i]), and its coordinates, (x[i], y[i]). Determine the name of the nearest city that shares either an x or a y coordinate with the queried city. If no other cities share an x or y coordinate, return 'NONE'. If two cities have the same distance to the queried city, q[i], consider the one with an alphabetically shorter name (i.e. 'ab' < 'aba' < 'abb') as the closest choice. The distance is the Manhattan distance, the absolute difference in x plus the absolute difference in y.

// Example
// n = 3
// c = ['c1', 'c2', 'c3'] 
// x = [3, 2, 1]
// y = [3, 2, 3]
// q = ['c1', 'c2', 'c3']

// The three points at (x[i], y[i]) are (3, 3), (2, 2) and (1, 3) represent the coordinates of the cities on the graph. The nearest city to c1 is c3, which shares a y value (distance = (3-1) + (3-3) = 2). City c2 does not have a nearest city as none share an x or y with c2, so this query returns 'NONE'. A query of c3 returns c1 based on the first calculation. The return array after all queries are complete is ['c3', 'NONE', 'c1'].

// Function Description
// Complete the function closestStraightCity in the editor below.

// closestStraightCity has the following parameter(s):
//     string c[n]: an array of strings that represent the names of each city[i]
//     int x[n]: the x coordinates of each city[i]
//     int y[n]: the y coordinates of each city[i]
//     string q[m]: the names of each city to query

// Returns:
//     string[m]: an array of m strings where the index of i element denotes the return value of the index of i query

// Constraints
// 1 ≤ n, m ≤ 10^5
// 1 ≤ x[i], y[i] ≤ 10^9
// 1 ≤ length of q[i] and c[i]  ≤ 10
// Each character of all c[i] and q[i] is in the range ascii[a-z, 0-9, -]
// All city name values, c[i], are unique
// All cities have unique coordinates
 
/*
 * Complete the 'closestStraightCity' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY c
 *  2. INTEGER_ARRAY x
 *  3. INTEGER_ARRAY y
 *  4. STRING_ARRAY q
 */

function closestStraightCity(c, x, y, q) {
    // Write your code here

    let xCities = {};
    let yCities = {};
    let position = {};
    let answers = [];
    
    for (let i=0; i<c.length; i++) {
        if (!xCities[x[i]]) xCities[x[i]] = [];
        if (!yCities[y[i]]) yCities[y[i]] = [];
        
        xCities[x[i]].push([y[i], c[i]]);
        yCities[y[i]].push([x[i], c[i]]);
        position[c[i]] = [x[i], y[i]];

    }
    
    for (let key in xCities) {
        xCities[key].sort((a,b) => a[0]-b[0]);
    }
    
    for (let key in yCities) {
        yCities[key].sort((a,b) => a[0]-b[0])
    }
    
    for (let query of q) {
        let [x,y] = position[query];
        
        let x_idx = search(xCities[x], y);
        let y_idx = search(yCities[y], x);
        
        
        let distance = Infinity;
        let closestCity = '';
        
        if (inBound(x_idx-1, xCities[x])) {
            [closestCity, distance] = calcNewDist(xCities[x][x_idx-1], y, distance, closestCity);
        }
        if (inBound(x_idx+1, xCities[x])) {
            [closestCity, distance] = calcNewDist(xCities[x][x_idx+1], y, distance, closestCity);
        }
        if (inBound(y_idx-1, yCities[y])) {
            [closestCity, distance] = calcNewDist(yCities[y][y_idx-1], x, distance, closestCity);
        }
        if (inBound(y_idx+1, yCities[y])) {
            [closestCity, distance] = calcNewDist(yCities[y][y_idx+1], x, distance, closestCity);
        }
        
        if (closestCity.length) {
            answers.push(closestCity);
        } else {
            answers.push('NONE');
        }
    }
    
    return answers;
}

const calcNewDist = function(newCity, coord, distance, closestCity) {
    let newDist = Math.abs(coord - newCity[0]);

    if (newDist < distance) {
        distance = newDist;
        closestCity = newCity[1];
    }
    return [closestCity, distance];
}

const inBound = (i, arr) => i >= 0 && i < arr.length;

 const search = function(arr, target) {
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let pivot = left + Math.floor((right - left)/2)
        if (arr[pivot][0] === target) return pivot;
        if (target < arr[pivot][0]) right = pivot - 1;
        if (target > arr[pivot][0]) left = pivot + 1;
    }
    
    return -1;
};

// Time Complexity: O(n*logn + q*logn)