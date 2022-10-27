// A palindrome is a string which reads the same forward and backwards, for example, tacocat and mom. A string is a scatter-palindrome if its letters can be rearranged to form a palindrome. Given an array consisting of n strings, for each string, determine how many of its substrings are scatter-palindromes. A substring is a contiguous range of characters within the string.

// Example
// strToEvaluate = ['aabb']

// The scatter-palindromes are a, aa, aab, aabb, a, abb, b, bb, b. There are 9 substrings that are scatter-palindromes.

// Function Description
// Complete the scatterPalindrome function in the editor below.

// scatterPalindrome has one parameter:
//     string strToEvaluate[n]: the n strings to be evaluated

// Returns
//     int[n]: each element i represents the number of substrings of strToEvaluate[i] which are scatter-palindromes.

// Constraints
// 1 ≤ n ≤ 100
// 1 ≤ size of strToEvaluate[i] ≤ 1000
// all characters of strToEvaluate[i] ∈ ascii[a-z]

/*
 * Complete the 'scatterPalindrome' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY strToEvaluate as parameter.
 */

function scatterPalindrome(strToEvaluate) {
    let result = []
    
    // O(m*n^2) where m is the length of the strToEvaluate array & n is the length of the longest string
    
    for (let str of strToEvaluate) {
        let count = 0                         //   i 
        for (let i = 0; i < str.length; i++) { // aabb
            let chars = new Set(); //{}
            for (let j = i; j < str.length; j++) {
                if (chars.has(str[j])) {
                    chars.delete(str[j])
                } else {
                    chars.add(str[j])
                }
                if (chars.size < 2) count++
            }

        }
        result.push(count)
    }
    return result
}