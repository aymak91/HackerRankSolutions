// A unique character is one that appears only once in a string. Given a string consisting 
// of lowercase English letters only, return the index of the first occurrence of a unique 
// character in the string using 1-based indexing. If the string does not contain any unique 
// character, return -1.

// Example
// s = "statistics" 

// The unique characters are [a, c] among which a occurs first. Using 1-based indexing, 
// it is at index 3.

// Function Description
// Complete the function getUniqueCharacter in the editor below.

// getUniqueCharacter has the following parameter(s):
//     string s:  a string

// Returns
//     int: either the 1-based index or -1

// Constraints
// 1 ≤ length of s ≤ 10^5
// The string s consists of lowercase English letters only.

function getUniqueCharacter(s) {
    // Write your code here
    let counter = {};
    
    for (const char of s) {
        if (!counter[char]) counter[char] = 0;
        counter[char]++;
    }

    let unique = new Set();
    Object.keys(counter).forEach(key => {
        if (counter[key] === 1) unique.add(key);
    })

    for (let i = 0; i < s.length; i++) {
        if (unique.has(s[i])) return i + 1;
    }
    return -1
}

