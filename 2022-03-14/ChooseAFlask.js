// A robotic chemical delivery system for a college chemistry laboratory has been configured to work using only one type of glass flask per day. For each chemical ordered, it will be filled to a mark that is at least equal to the volume ordered. There are multiple flasks available, each with markings at various levels. Given a list of order requirements and a list of flasks with their measurements, determine the single type of flask that will result in minimal waste.  Waste is the sum of marking - requirement for each order.  Return the zero-based index of the flask type chosen.  If there are multiple answers, return the minimum index.  If no flask will satisfy the constraints, return -1.

 

// Example

// n = 4 (number of orders)

// requirements = [4, 6, 6, 7]

// flaskTypes = 3

// markings = [[0, 3], [0, 5], [0, 7], 

//                       [1, 6], [1, 8], [1, 9],

//                       [2, 3], [2, 5], [2, 6]]

 

// The markings array is a 2D array where the first element is the flask number and the 
// second an available marking.  In this case, the first type has markings at 3, 5 and 7.  
// The second type has them at 6, 8 and 9, and the third type has markings at 3, 5 and 6.

// Using the first flask type, the losses are: 
// 5 - 4 = 1, 7 - 6 = 1, 7 - 6 = 1, 7 - 7 = 0.  1 + 1 + 1 + 0 = 3 units wasted.

// Using the second flask type, losses are: 
// 6 - 4 = 2, 6 - 6 = 0, 6 - 6 = 0, 8 - 7 = 1.  2 + 0 + 0 + 1 = 3 units wasted.

// The third flask type cannot be used because its maximum capacity is 6 and 
// there is an order for 7.

// Two types of flasks can be used and 3 units will be lost.  The lower index flask is at index 0.

// NOTE: The markings 2D array will be given in order of the flasks, i.e., 
// the markings for the 0-index flask will be followed by markings of 1-index flask and so on. 
// For each flask, the given markings will also be sorted in ascending order.

// Function Description
// Complete the function chooseFlask in the editor below.

// chooseFlask has the following parameter(s):
//     int requirements[n]:  the requirements for the orders
//     int flaskTypes:  the number of flask types
//     int markings[totalMarks][2]:  the first column signifies the index of the flask and second signifies one mark

// Returns:
//     int: the index of the flask to choose or -1 if none will work


// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ flaskTypes ≤ 10^4
// 1 ≤ totalMarks ≤ 10^5
// 1 ≤ requirements[i] ≤ 10^9 (where 0 ≤ i < n)
// 0 ≤ markings[i][0] < flaskTypes (where 0 ≤ i < total_marks)
// 0 ≤ markings[i][1] ≤ 10^9 (where 0 ≤ i < total_marks)

/*
 * Complete the 'chooseFlask' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY requirements
 *  2. INTEGER flaskTypes
 *  3. 2D_INTEGER_ARRAY markings
 */

function chooseFlask(requirements, flaskTypes, markings) {
    requirements = requirements.sort((a, b) => a - b)
    let minWaste = {
        sum: Infinity,
        flask: -1
    }
    
    let currFlaskNum = 0;
    let mark = 0;
    
    while (currFlaskNum < flaskTypes) {
        let currWasteSum = 0;
        let reqNum = 0;
        
        // check all reqs against markings in currFlask
        while (reqNum < requirements.length && mark < markings.length && markings[mark][0] === currFlaskNum) {
            if (requirements[reqNum] > markings[mark][1]) {
                mark++;
            } else {
                currWasteSum += markings[mark][1] - requirements[reqNum];
                reqNum++;
            }
        }
        
        while (mark < markings.length && markings[mark][0] === currFlaskNum) mark++;

        if (reqNum === requirements.length && currWasteSum < minWaste.sum) {
            minWaste.sum = currWasteSum;
            minWaste.flask = currFlaskNum;
        }
        currFlaskNum++
    }

    return minWaste.flask;
}
