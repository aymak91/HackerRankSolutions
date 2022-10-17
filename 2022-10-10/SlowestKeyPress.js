// Engineers have redesigned a keypad used by ambulance drivers in urban areas. In order to determine which key takes the longest time to press, the keypad is tested by a driver. Given the results of that test, determine which key takes the longest to press.

// Example
// keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]]

// Elements in keyTimes[i][0] represent encoded characters in the range ascii[a-z] where a = 0, b = 1, ..., z = 25. The second element, keyTimes[i][1] represents the time the key is pressed since the start of the test.   The elements will be given in ascending time order. In the example, keys pressed, in order are 0102[encoded] = abac at times 2, 5, 9, 15.  From the start time, it took 2 - 0 = 2 to press the first key, 5 - 2 = 3 to press the second, and so on. The longest time it took to press a key was key 2, or 'c', at 15 - 9 = 6. 
 
// Function Description
// Complete the function slowestKey in the editor below.

// slowestKey has the following parameter(s):
//     int keyTimes[n][2]:  the first column contains the encoded key pressed, the second contains the time at which it was pressed

// Returns:
//     char: the key that took the longest time to press

// Constraints

// 1 ≤ n ≤ 10^5
// 0 ≤ keyTimes[i][0] ≤ 25 (0 ≤ i < n)
// 1 ≤ keyTimes[i][1] ≤ 108 (0 ≤ i < n)
// There will only be one key with the worst time.
// keyTimes is sorted in ascending order of keyTimes[i][1]

/*
 * Complete the 'slowestKey' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY keyTimes as parameter.
 */

function slowestKey(keyTimes) {
    // Write your code here
    if (keyTimes === null || keyTimes.length === 0) return null;

    let maxTime = -Infinity;
    const dictionary = 'abcdefghijklmnopqrstuvwxyz';
    let key;
    let prevTime = 0;
    
    for (let i=0; i<keyTimes.length; i++) {
        const pressTime = keyTimes[i][1] - prevTime;
        if (pressTime > maxTime) {
            maxTime = pressTime;
            key = dictionary[keyTimes[i][0]];
        }
        prevTime = keyTimes[i][1];
    }
    return key;
}

