// A student decides to perform some operations on big words to compress them, 
// so they become easy to remember. An operation consists of choosing a group 
// of K consecutive equal characters and removing them. The student keeps performing 
// this operation as long as it is possible. Determine the final word after the operation 
// is performed.

// Example
// word = "abbcccb" 
// k = 3

// Remove k = 3 characters  'c', now word = "abbb".
// Remove 3 characters 'b', so the final word is "a".
 
// It can be easily proven that the final word will be unique. Also, it is guaranteed that the final word consists of at least one character.

// Function Description
// Complete the function compressWord in the editor below.

// compressWord has the following parameter(s):
//     string word:  a string of lowercase English letters
//     int k:  the number of consecutive equal characters

// Returns:
//     string : denotes the final word.

// Constraints
// 1 ≤ |word| ≤ 10^5
// 1 < k ≤ |word| 

/*
 * Complete the 'compressWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING word
 *  2. INTEGER k
 */

function compressWord(word, k) {
    // Write your code here
    
    const stack = [[word[0], 1]];
    
    for (let i=1; i<word.length; i++) {
        let char = word[i];
        let top = stack[stack.length-1] || [];
        
        if (top[0] === char && top[1] === k-1) {
            stack.pop();
        } else if (top[0] === char && top[1] !== k-1) {
            top[1]++;
        } else {
            stack.push([char, 1]);
        }
    }
    
    let res = '';
    
    for (let ele of stack) {
        while (ele[1] > 0) {
            res += ele[0];
            ele[1]--;
        }
    }
    
    return res;

}