// A palindrome reads the same from left or right, mom for example. There is a palindrome which must be modified, if possible. Change exactly one character of the string to another character in the range ascii[a-z] so that the string meets the following three conditions:

// The new string is lower alphabetically than the initial string.
// The new string is the lowest value string alphabetically that can be created from the original palindrome after making only one change.
// The new string is not a palindrome.
 
// Return the new string, or, if it not possible to create a string meeting the criteria, return the string IMPOSSIBLE.

 

// Example
// palindromeStr = 'aaabbaaa'

// Possible strings lower alphabetically than 'aaabbaaa' after one change are ['aaaabaaa', 'aaabaaaa'].
// 'aaaabaaa' is not a palindrome and is the lowest string that can be created from palindromeStr.
 

// Function Description 
// Complete the function breakPalindrome in the editor below.

// breakPalindrome has the following parameter(s):
//     string palindromeStr:  the original string

 

// Returns:
//     string: the resulting string, or IMPOSSIBLE if one cannot be formed

// Constraints
// 1 ≤ length of palindromeStr ≤ 1000
// palindromeStr is a palindrome
// palindromeStr contains only lowercase English letters

/*
 * Complete the 'breakPalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING palindromeStr as parameter.
 */

function breakPalindrome(palindromeStr) {
    if(palindromeStr.length===1) return "IMPOSSIBLE";
        
    let firstNonA;
    for(let i=0;i<palindromeStr.length;i++){
        if (palindromeStr[i]!=="a"){
            if (!firstNonA) firstNonA = i;
            const newString = palindromeStr.slice(0,firstNonA) + "a" + palindromeStr.slice(firstNonA+1);
            if (isPalindrome(newString)) continue;
            return newString;
        }
    }
    
    return "IMPOSSIBLE";
}

function isPalindrome(string) {
    return string === string.split("").reverse().join("");
}