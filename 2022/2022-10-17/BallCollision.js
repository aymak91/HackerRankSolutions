// There are n balls placed on a 1-dimensional axis with each of them moving with the same non-zero speed. direction[i] represents the direction in which the ith ball is moving, with -1 meaning that it is moving to the left and 1 meaning it is moving to the right. The strength of the ith ball is described by strength[i]. If 2 balls collide, the one with the higher strength destroys the smaller one. If both have the same strength, both are destroyed. Return a list of the indices of the balls that remain after all the collisions have occurred, in ascending order.

// Note that the arrays direction and strength are 0-indexed. 

// Example
// direction = [1, -1]
// strength = [2, 1]

// The number of balls n = 2. The balls are listed in order of occurrence from left to right, so ball 0 is somewhere to the left of ball 1. Ball 0 is moving to the right and ball 1 is moving to the left. The balls will collide at some point and the ball with the higher strength, ball 0, remains. Return [0] as the answer.

// Function Description
// Complete the function findRemainingBalls in the editor below.

// findRemainingBalls has the following parameter(s):
//     int direction[n]:  the directions of the particles in order of their starting relative positions
//     int strength[n]:  the strengths of the particles

// Returns
//     int[]: an integer array that contains the indices of the remaining balls in ascending order

// Constraints
// 1 ≤ n ≤ 10^5
// direction[i] is either 1 or -1
// 1 ≤ strength[i] ≤10^9

/*
 * Complete the 'findRemainingBalls' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY direction
 *  2. INTEGER_ARRAY strength
 */

function findRemainingBalls(direction, strength) {
    // Write your code here
    
    let balls = []
    
    for (let i=0; i<direction.length; i++) balls.push(i);

    let stack = [];
    
    for (let i=0; i<balls.length; i++) {
        let index = balls[i]

        // if the stack is empty or if the ball direction is positive, push ball into stack
        if (stack.length < 1 || direction[index] > 0) {
            stack.push(index)
        } else {
            while (true) {
                // check top of stack
                const peek = stack[stack.length - 1];
                const peekDirection = direction[peek];
                const peekStrength = strength[peek];
                
                // if the previous ball was negative, there is no collision
                if (peekDirection < 0) {
                    stack.push(index);
                    break;
                // if prev was pos and both are equal in magnitude, they both blow up
                // pop last ball and do not push
                } else if (strength[index] === peekStrength) {
                    stack.pop();
                    break;
                // if prev was pos and is bigger than current ball, current ball blows up
                // do nothing
                } else if (peekStrength > strength[index]) {
                    break;
                // if prev was pos and is less than the current ball, keep destroying balls
                } else {
                    stack.pop();
                    // if everything is blown up, push into stack
                    if (stack.length < 1) {
                        stack.push(index);
                        break;
                    }
                }
            }
        }
    }
    return stack;
}
