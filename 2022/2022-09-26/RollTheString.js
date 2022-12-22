// A single roll operation on a string is a circular increment of each character by one. Looking at the English alphabet, characters in the range ascii[a-z], a becomes b, b becomes c, and z becomes a.

// Given an array of integers named roll, perform a roll operation on the first roll[i] characters of s for each element i in the array. Given a zero indexed string, an operation roll[i] affects characters at positions 0 through (roll[i]-1).


// Example 
// s = 'abz'
// roll = [3, 2, 1]

 

// Perform the following sequence of operations:
// roll[0] = 3: Roll all three characters so 'abz' becomes 'bca.'
// roll[1] = 2: Roll the first two characters so 'bca' becomes 'cda'.
// roll[2] = 1: Roll the first character so 'cda' becomes 'dda'.
// After performing the operations, the final value of s is 'dda'.

 

// Function Description 
// Complete the function rollTheString in the editor below.

 

// rollTheString has the following parameter(s):
//     string s:  the string to operate on
//     int roll[n]:  an array of integers indicating the number of items in s to roll

// Returns:
//      string :  the resulting string after all roll operations have been performed

 

// Constraints
// Each character in s is a character in the range ascii[a-z].
// 1 ≤ length of s ≤ 105
// 1 ≤ n ≤ 105
// 1 ≤ roll[i] ≤ length of s, where 0 ≤ i < n.

/*
 * Complete the 'rollTheString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY roll
 */
 

function rollTheString(s, roll) {
    // Write your code here

    const rollTimes = new Array(s.length).fill(0); 
    for (const r of roll) {
        rollTimes[r - 1] += 1;
    }
    
    for (let i = rollTimes.length - 2; i >= 0; i--) { 
        rollTimes[i] += rollTimes[i + 1];
    }

    let resStr = '';
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    

    for (let i=0; i<rollTimes.length; i++) {
        const times = rollTimes[i];
        const alphaIdx = alpha.indexOf(s[i]);
        const newAlphaIdx = (alphaIdx + times) % 26
        resStr += alpha[newAlphaIdx];
    }
    
    return resStr;
}

