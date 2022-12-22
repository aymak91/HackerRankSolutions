// Metro Land is a country located on a 2D plane. They are planning a summer festival for everyone in the country and would like to minimize the overall cost of travel for their citizens. Costs of travel are calculated as follows:
// A city is located at coordinates (x, y).
// The festival is located at coordinates (a, b).
// Cost of travel from a city to the festival = |x-a| + |y-b| per person. 
 
// The festival can be held at any integral location in Metro Land. Find the optimal location for the festival, defined as the location with the minimal total travel cost assuming all people attend. Return the total travel cost for all citizens to attend the festival.

// Example 
// numPeople = [1, 2]
// x = [1, 3]
// y = [1, 3]

// There is 1 person in City 0 located at (x[0], y[0]) = (1, 1) and there are 2 people in City 1 at (x[1], y[1]) = (3, 3).
// If the location for the festival is at (2, 2):

// The cost of travel from city 0 at (1, 1) to the festival 2 = |1-2| + |1-2| .
// The cost of travel from city 1 at (3, 3) to the festival 4 = 2 *( |3-2| + |3-2|).
// The total cost of travel for all citizens to go to the festival is 2+ 4 = 6.
// If the location for the festival is at (3, 3). 

// The cost of travel from city 0 at (1, 1) to the festival is |1-3| + |1-3| = 4 .
// The cost of travel from city 1 at (3, 3) to the festival |3-3| + |3-3| = 0.
// The total cost of travel for all citizens to go to the festival is 0+ 4 = 4.
 
// The optimal location for the festival is at (3, 3) with a cost of 4. Return 4.
// There is another way to analyze the problem. These two matrices show the costs to move one person from a city to any other position (a, b) on the map with an origin at (x, y) = (1, 1) at the top left.
// Since there are two people in City 1, multiply those values by 2, then sum the two matrices, (City 0 * 1) + (City 1 * 2):
// The lowest total cost to travel is at grid position (3,3) at a cost of 4.

// Function Description 
// Complete the function minimizeCost in the editor below.

// minimizeCost has the following parameter(s):
//     int numPeople[n]:  each numPeople[i] denotes the number of people in city i
//     int x[n]:  each x[i] denotes the x coordinate of city i
//     int y[n]:  each y[i] denotes the y coordinate of city i

// Returns 
//     int:  the minimum cost of getting all the people to an optimal festival location

// Constraints
// 1 ≤ n ≤ 10^3
// 1 ≤ x[i], y[i] ≤ 10^4
// 1 ≤ p[i] ≤ 50

/*
 * Complete the 'minimizeCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numPeople
 *  2. INTEGER_ARRAY x
 *  3. INTEGER_ARRAY y
 */


function minimizeCost(numPeople, x, y) {
    // Write your code here
    let xCord = [] 
    let yCord = [] 
    let minCost = 0;
    for (let i = 0; i < numPeople.length; i++) {
        let peopleCount = numPeople[i] 
        while (peopleCount) {
            xCord.push(x[i])
            yCord.push(y[i])
            peopleCount--
        }
    }

    xCord = xCord.sort((a, b) => a - b)
    yCord = yCord.sort((a, b) => a - b)

    let len = xCord.length 
    let mid = Math.floor(len / 2) 

    let medianX = xCord[mid] 
    let medianY = yCord[mid] 


    for (let i = 0; i < numPeople.length; i++) {
        minCost += numPeople[i] * cost(medianX, medianY, x[i], y[i])
    }
    return minCost
}


function cost(medianX, medianY, a, b) {
    return (Math.abs(medianX - a) + Math.abs(medianY - b))
}