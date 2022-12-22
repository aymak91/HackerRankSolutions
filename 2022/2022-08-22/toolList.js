// A milling machine in a manufacturing facility has a tool change system. The tool changer holds n tools and some duplicate tools may be included. 
// The operator must move through the tools one at a time, either moving left or right. The tool changer is circular, so when the last tool in 
// the tools array is reached in either direction, the next tool is at the other end of the array.
 
// Given the name of the next tool needed, determine the minimum number of left or right moves to reach it. 

// Example:
// tools = ['ballendmill', 'keywaycutter', 'slotdrill', 'facemill']
// startIndex = 1
// target = 'ballendmill'

// The tool currently in use is keywaycutter at index 1. The desired tool is ballendmill at index 0. It can be reached by moving right 3 steps or left 1 step. The minimum number of moves is 1.

// Function Description Complete the function toolchanger in the editor below. 

// toolchanger has the following parameter(s):
//     str tools[n]:  an array of tool names arranged in the order they appear in the tool changer
//     int startIndex: index of the tool currently in use
//     str target:  name of the tool needed

// Returns:
//     int: minimum number of moves required to reach the needed tool

// Constraints
// 1 ≤ n ≤ 100
// 0 ≤ startIndex ≤ n−1
// 1 ≤ lengths of tools[i] and target ≤ 100
// target is in tools
 
/*
 * Complete the 'toolchanger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY tools
 *  2. INTEGER startIndex
 *  3. STRING target
 */

function toolchanger(tools, startIndex, target) {
    // Write your code here
    
    let offset = 1;
    
    while (offset < tools.length) {
        let leftOffset = startIndex - offset < 0 ? tools.length - startIndex - offset : startIndex - offset;
        let rightOffset = (startIndex + offset) % tools.length;
    
        if (tools[leftOffset] === target || tools[rightOffset] === target) {
            return offset > tools.length - offset ? tools.length - offset : offset;
        }
        offset++;
    }
}

