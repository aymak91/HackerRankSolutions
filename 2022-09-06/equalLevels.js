// Two signals are being generated as part of a simulation. A program monitors the signals. Whenever the two signals become equal at the same time, the frequency is noted. 
// A record is maintained for the maximum simultaneous frequency seen so far. Each time a higher simultaneous frequency is noted, this variable (maxequal) is updated 
// to the higher frequency.
 

// Note:
// Both signals start at time t=0, but their durations might be different. In this case, the comparison of equality is performed only until the end of the shorter signal.
// If both signals have equal frequencies at a given time but the frequency is less than or equal to the current maximum frequency, maxequal, is not updated.
 
// The running times of both signals are given, denoted by n and m respectively. During the course of the simulation, how many times is the maxequal variable updated?

// Example
// signalOne = [1, 2, 3, 3, 3, 5, 4]
// signalTwo = [1, 2, 3, 4, 3, 5, 4] 

// Each of the first three signals match and are increasing, so maxequal is updated 3 times to 1, 2 and then 3.
// At the fourth time, they are not equal.
// At the fifth, they are equal to 3. Since maxequal contains 3 already, it is not updated.
// At the sixth time, both signals are equal to 5. This is greater than maxequal = 3, so now maxequal = 5.
// At the final time, signals are equal to 4. Since 4 is less than maxequal, it is not updated.
// maxEqual was updated a total of 4 times.


// Function Description
// Complete the updateTimes function in the editor below.

// updateTimes has the following parameter(s):
//     int signalOne[n]: the frequencies of the first signal
//     int signalTwo[m]: the frequencies of the second signal

// Return
//     int:  the number of updates

// Constraints
// 1 ≤ n ≤ 10^5 
// 0 ≤ signalOne[i] ≤ 10^9
// 1 ≤ m ≤ 10^5
// 0 ≤ signalTwo[i] ≤ 10^9

/*
 * Complete the 'updateTimes' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY signalOne
 *  2. INTEGER_ARRAY signalTwo
 */

function updateTimes(signalOne, signalTwo) {
    // Write your code here
    
    let maxFreq = -Infinity;
    let updates = 0;
    
    for (let i=0; i<signalOne.length; i++) {
        if (signalOne[i] === signalTwo[i] && maxFreq < signalOne[i]) {
            updates++;
            maxFreq = signalOne[i];
        }
    }
    
    return updates;

}

