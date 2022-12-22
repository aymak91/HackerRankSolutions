// There is a bot located at a pair of integer coordinates, (x, y). It must be moved to a location with another set of coordinates. 
// Though the bot can move any number of times, it can only make the following two types of moves:

// From location (x, y) to location (x + y, y).
// From location (x, y) to location (x, x + y).
 
// For example, if the bot starts at (1, 1), it might make the following sequence of moves: (1, 1) → (1, 2) → (3, 2) → (5, 2). Note that movement will always be either up or to the right.


// Given starting and target ending coordinates, determine whether the bot can reach the ending coordinates given the rules of movement.

// Function Description 
// Complete the function canReach in the editor below. The function must return the string Yes if the bot can reach its goal, otherwise return No.

// canReach has the following parameter(s):
//     x1:  integer value, starting x coordinate
//     y1:  integer value, starting y coordinate
//     x2:  integer value, target x coordinate
//     y2:  integer value, target y coordinate

// Constraints
// 1 ≤ x1, y1, x2, y2 ≤ 1000

/*
 * Complete the 'canReach' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER y1
 *  3. INTEGER x2
 *  4. INTEGER y2
 */

function canReach(x1, y1, x2, y2) {
    // Write your code here
    
    while (x2 >= x1 && y2 >= y1) {
        if (x2 == y2) break;
        
        if (x2 > y2) {
            if (y2 > y1) x2 -= y2;
            else return (x2 - x1) % y2 == 0 ? 'Yes' : 'No';
        } else {
            if (x2 > x1) y2 -= x2;
            else return (y2 - y1) % x2 == 0 ? 'Yes' : 'No';
        }
    }
    
    return (x2 == x1 && y2 == y1) ? 'Yes' : 'No';

}

