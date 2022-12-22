// Students in a class are asked to stand in ascending order according to their heights for the annual class photograph. Determine the number of students not currently standing in their correct positions.

// Example
// height = [1, 1, 3, 3, 4, 1]
// The 3 students indicated in red at indices 2, 4 and 5, are not in the right positions. The correct positions are [1, 1, 1, 3, 3, 4]. Return 3.

// Function Description
// Complete the function countStudents in the editor below.

// countStudents has the following parameter(s):
//     int height[n]: an array of heights in the order the students are standing

// Returns:
//     int: the number of students not standing in the correct positions.

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ height[i] ≤ 10^9

/*
 * Complete the 'countStudents' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY height as parameter.
 */

function countStudents(height) {
    // Write your code here
    
    const sorted = new Array(height.length);
    
    for (let i=0; i<height.length; i++) {
        sorted[i] = height[i];
    }
    
    sorted.sort((a,b) => a-b);
    
    let count = 0;
    
    for (let i=0; i<height.length; i++) {
        if (sorted[i] !== height[i]) count++;
    }
    
    return count;

}

