// A music player allows users to choose songs to play, but only in pairs and only pairs of songs with durations that add up to a multiple of 
// 60 seconds (e.g., 60, 120, 180). Given a list of song durations, calculate the total number of different song pairs that can be chosen.

 

// Example
// n = 3
// songs = [40, 20, 60]

// One pair of songs can be chosen whose combined duration is a multiple of a whole minute (40 + 20 = 60) and the return value would be 1. While the third song is a single minute long, songs must be chosen in pairs.
 
// Function Description 
// Complete the function playlist in the editor below.

// playlist has the following parameter(s):

//     int songs[n]:  array of integers representing song durations in seconds
// Returns:

//     int: the number of songs pairs that add up to a multiple of a minute 

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ songs[i] ≤ 1000, where 0 ≤ i < n

/*
 * Complete the 'playlist' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY songs as parameter.
 */

function playlist(songs) {
    // Write your code here
    // [10, 50, 90, 30]
    songs = songs.map(time => time % 60) // [10, 50, 30, 30]
    const counter = {} // {10: 1, 50: 1, 30:1]
    let pairs = 0
    songs.forEach(song => { 
        // modulo takes care of edge case where song is 0
        const diff = (60 - song) % 60
        if (counter[diff]) pairs += counter[diff]
        if (!counter[song]) counter[song] = 0
        counter[song]++
    })
    return pairs

}