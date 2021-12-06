// Two strings are anagrams if they are permutations of each other. In other words, both strings have the same 
// size and the same characters. For example, "aaagmnrs" is an anagram of "anagrams". Given an array of strings,
//  remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

// Example

// str = ['code', 'doce', 'ecod', 'framer', 'frame']

// "code" and "doce" are anagrams. Remove "doce" from the array and keep the first occurrence "code" in the array.
// "code" and "ecod" are anagrams. Remove "ecod" from the array and keep the first occurrence "code" in the array.
// "code" and "framer" are not anagrams. Keep both strings in the array.
// "framer" and "frame" are not anagrams due to the extra 'r' in 'framer'. Keep both strings in the array.
// Order the remaining strings in ascending order: [ "code","frame","framer"].
 
// Function Description
// Complete the function funWithAnagrams in the editor below.

// funWithAnagrams has the following parameters:
//     string text[n]:  an array of strings

// Returns:
//     string[m]:  an array of the remaining strings in ascending alphabetical order,.

 

// Constraints
//  0 ≤ n ≤ 1000
// 0 ≤ m ≤ n
// 1 ≤ length of text[i] ≤ 1000
// Each string text[i] is made up of characters in the range ascii[a-z].

function funWithAnagrams(text) {
    // Write your code here

    let visited = new Set();
    
    for (let i=0; i<text.length; i++) {
        const sortedWord = text[i].split('').sort().join('');
        
        if (visited.has(sortedWord)) text[i] = '';
        visited.add(sortedWord);
    }
    
    return text.filter(word => word !== '').sort();
}

// Time: O(n*m*log(m)) where n = length of text array and m = length of longest word
// Space: O(n) where n = length of text array