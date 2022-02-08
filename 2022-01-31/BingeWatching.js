// A friend of Alex has gifted a movie collection, and Alex is excited to watch them all as quickly as possible. The duration of the movies is given in array durations[n], 
// where n is the number of movies, and each movie duration lies between 1.01 and 3.00 units of time (up to two decimal places). Every day, Alex wants to spend no more than 
// 3.00 units of time watching the movies but also wants to complete the movies in the least number of days possible. Alex does not leave a movie in between. That is, if 
// Alex has picked up a movie, Alex watches the complete movie on the same day. Find the minimum number of days needed to watch all the movies.

// Example
// n = 5 
// duarations = [1.90, 1.04, 1.25, 2.5, 1.75]

// Considering 1-based indexing, Alex can watch the movies in a minimum of 3 days as:
// Day 1:     first and second movie: 1.90 + 1.04 = 2.94 ≤  3.00
// Day 2:     fourth movie: 2.5 ≤  3.00
// Day 3:     third and fifth movie: 1.25 + 1.75 = 3.00 ≤  3.00

// Function Description
// Complete the function findMinimumDays in the editor below.

// findMinimumDays has the following parameter(s):
//     float durations[n]:  the duration of each movie.
// Returns
//     int:  the minimum number of days required to watch all the movies.

// Constraints
// 1 ≤ n ≤ 1000
// 1.01 ≤ duration[i] ≤ 3.0

/*
 * Complete the 'findMinimumDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts FLOAT_ARRAY durations as parameter.
 */

function findMinimumDays(durations) {
    // Write your code here
    durations.sort((a, b) => a - b)
    
    let left = 0;
    let right = durations.length - 1;
    let days = 0;
    
    while (left <= right) {
        const firstMovie = durations[left];
        const secondMovie = durations[right];
        if (firstMovie + secondMovie <= 3.00 ) {
            days++;
            left++;
            right--;
        } else {
            days++;
            right--;
        }
    }    
    return days;
}