// Some numbers are formed with closed paths. The digits 0, 4, 6 and 9 each have 1 closed path, 
// and 8 has 2.  None of the other numbers is formed with a closed path. Given a number, 
// determine the total number of closed paths in all of its digits combined.

// Example
// number = 649578
// The digits with closed paths are 6, 4, 9 and 8.  The total number of closed paths is 1 + 1 + 1 + 2 = 5.

// Function Description 
// Complete the function closedPaths in the editor below.

// closedPaths has the following parameter(s):
//     int number:  an integer

// Returns:
//     int:  the number of closed paths in number

// Constraints
// 1 ≤ number ≤ 10^9

/*
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function closedPaths(number) {
    // Write your code here
    let sum = 0
    const paths = { '0': 1, '4': 1, '6': 1, '9': 1, '8': 2 }
    number = number.toString().split('')
    number.forEach(num => {
        if (paths[num]) sum += paths[num]
    })
    return sum
}