// A sentence is made up of a group of words. Each word is a sequence of letters, ('a'-'z', 'A'-'Z'), that may contain one or more hyphens 
// and may end in a punctuation mark: period (.), comma (,), question mark (?), or exclamation point (!). Words will be separated by one 
// or more white space characters. Hyphens join two words into one and should be retained while the other punctuation marks should be stripped. 
// Determine the number of words in a given sentence.

 

// Example
// s = 'How many eggs are in a half-dozen, 13?'
// The list of words in the string is ['How', 'many', 'eggs', 'are', in', 'a', 'half-dozen'] and the number of words is 7. Notice that the numeric string, '13', is not a word because it is not within the allowed character set.

// Function Description
// Complete the function howMany in the editor below.

// howMany has the following parameter(s):
//     sentence: a string

// Returns:
//     int: an integer that represents the number of words in the string

// Constraints
// 0 < length of s ≤ 105

/*
 * Complete the 'howMany' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING sentence as parameter.
 */

function howMany(sentence) {
    // Write your code here
    let words = sentence.split(" ");
    let wordCount = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (isWord(words[i])) wordCount++;
    }
    
    return wordCount;
}

function isWord(word) {
    if (word.length === 0) return false;
    
    word = word.toLowerCase();
    let dictionary = "abcdefghijklmnopqrstuvwxyz.,?!-".split("");
    
    for (let i = 0; i < word.length; i++) {
        if (!dictionary.includes(word[i])) return false;
    }

    return true;
}