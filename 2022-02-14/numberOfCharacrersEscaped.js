// Given a string that consists of lowercase English letters and the characters '#' (ASCII value 35) and '!' (ASCII value 33), 
// determine the number of times a character will be escaped. A character will be escaped if:
    // It is a lowercase English letter, and
    // There is a '!' character immediately before it, and
    // Both the lowercase English letter and the '!' character are between a starting and an ending '#' character

// Example
// expression = '#ab!c#de!f'
// The string is escaped once at '!c'. The substring '!f' is not between '#' characters so it is not escaped. Return 1. 

// Function Description
// Complete the numberOfCharactersEscaped function in the editor below.

// numberOfCharactersEscaped has the following parameter(s):
//     expression: a string to evaluate

// Returns
//     int: the number of characters that are escaped

// Constraints
// 1 ≤ length of expression ≤ 105
// The # characters will not be nested
// Every opening # character will have a closing # character

// Test Cases:
    // Input: '##!r#po#'
    // Output: 0

    // Input: '#a!b#c'
    // Output: 1

    // Input: '!#!#!!y#b#w!wp!#!lhu!l!uef!lj!!lfmsuyj!!#!#o!!!x#b'
    // Output: 6

// Complete the numberOfCharactersEscaped function below.
function numberOfCharactersEscaped(expression) {

    let open = false;
    let count = 0;
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i=0; i<expression.length; i++) {
        const char = expression[i];
        const lowerCase = alpha.includes(expression[i]);
        const prevExclamation = expression[i - 1] === '!';
                
        if (char === '#') open = !open;
        if (open && lowerCase && prevExclamation) count++;
    }
    
    return count;
}

