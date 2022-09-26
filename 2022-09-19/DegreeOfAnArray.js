// Given an array of integers, its degree is defined as the number of occurrences of the element that occurs most frequently in the array. Given a list of integers, determine two properties:
    // the degree of the array
    // the length of the shortest sub-array that shares that degree
 

// Example
// arr = [1, 2, 1, 3, 2]

// The array has a degree of 2 based on the occurrences of values 1 and 2. The subarray of degree 2 based on the 1's is [1, 2, 1] and based on 2's is [2, 1, 3, 2]. Their lengths are 3 and 4, so the shortest is length 3. Return the shortest length.

// Function Description 
// Complete the function degreeOfArray in the editor below. The function must return an integer denoting the minimum size of the subarray such that the degree of the subarray is equal to the degree of the array.


// degreeOfArray has the following parameter(s):
//     int arr[n]:  an array of integers indexed from 0 to n-1

// Return
//     int:  the minimum size of the subarrays that have a degree equal to the degree of the array

// Constraints
// 2 ≤ n ≤ 10^5
// 1 ≤ arr[i]≤ 10^6

/*
 * Complete the 'degreeOfArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function degreeOfArray(arr) {
    // Write your code here
    
    const frequencies = new Map();
    
    for (let i=0; i<arr.length; i++) {
        const num = arr[i];
        if (!frequencies.get(num)) frequencies.set(num, 0);
        frequencies.set(num, frequencies.get(num)+1);
    }
    
    const highestFreq = Array.from(frequencies.values()).sort((a,b) => a-b).pop();
    const mostFreq = Array.from(frequencies.keys()).filter(num => frequencies.get(num) === highestFreq);
    console.log(highestFreq, mostFreq)
    let minLength = Infinity;
    
    for (let num of mostFreq) {
        let left = arr.indexOf(num);
        let right = left;
        let length = 1;
        
        while (right < arr.length) {
            if (arr[right] === num) {
                length = right-left+1;
                console.log(num, left, right, length)
            }
            right++;
        }

        minLength = Math.min(minLength, length);
    }
    
    return minLength;

}

