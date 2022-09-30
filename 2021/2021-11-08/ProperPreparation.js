// Proper Preparation

// A string s is good if it is possible to rearrange the characters of s such that the new string 
// formed contains "prep" as a substring. So the string "proper" is good but "poor" is not. 
// Given an integer n, find the number of good strings of length n consisting of only lowercase 
// English characters. As this number might be too large, return it modulo (10^9 + 7).


// A substring of a string is a contiguous subsequence of that string. So, string "acker" is 
// a substring of "hackerrank", but "her" is not.

// Example
// Let n = 4,
// Output : 12

// Explanation : 
// A string of 4 characters must have the letters p, r, e, and p. There are 12 distinct strings 
// where this is the case and 12 modulo (10^9 + 7) = 12.

// ppre
// prep
// repp
// eppr
// perp
// erpp
// rppe
// pper
// rpep
// pepr
// eprp
// prpe
 
// Function Description
// Complete the function properPreparation in the editor below.

// properPreparation has the following parameter:
//     n:  an integer

// Returns
//     int: the number of good strings, modulo (109 + 7)

// Constraints
// 1 ≤ n ≤ 10^5

// 

function properPreparation(n) {
    // Write your code here

    // if (n < 4) return 0;

    let combos = new Set();
    
    function isValid(str) {
        const count = {
            "p": 0,
            "r": 0,
            "e": 0
        }
    
        for (let char of str) {
            if (char === "p" || char === "r" || char === "e") count[char]++;
            if (count["p"] >= 2 && count["r"] > 0 && count["e"] > 0) return true;
        }
    
        return false;
    }

    function printAllKLengthRec(prefix, k) {
        const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
      if (k === 0) {
          if (isValid(prefix)) {
              combos.add(prefix)
          }
        return;
      }
      for (let i = 0; i < 26; i++) {
        let newPrefix = prefix + alpha[i];
        printAllKLengthRec(newPrefix, k - 1);
      }
    }
    printAllKLengthRec("", n)
    

    
    return combos.size
}