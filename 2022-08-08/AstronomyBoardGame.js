// In an astronomy board game, N planets in an imaginary universe do not follow the normal law of gravitation. 
// All the planets are positioned in a row. The planetary system can be in a stable state only if the sum of the 
// mass of all planets at even positions is equal to the sum of the mass of planets at the odd positions.

// Initially, the system is not stable, but a player can destroy one planet to make it stable. Find the planet that should be destroyed to make the system stable. If no such planet exists, then return -1. If there are multiple such planets, then destroy the planet with the smallest index and return the index of the destroyed planet.

// Example
// Let N=5 and planets = [2,4,6,3,4]. Destroying the fourth planet of mass 3 will result in planets = [2,4,6,4], and here, the sum of odd positioned planets is (2+6)=8, and the sum of even positioned planets is (4+4)=8, and both are equal now. Hence, we destroy the fourth planet.

// Function Description
// Complete the function getPlanetToDestroy in the editor below.

// getPlanetToDestroy has the following parameter(s):
//     planets[planets[1],...planets[n]]:  An array of integers

// Returns
//     int: the index of the planet to be destroyed.

// Constraints
// 2 ≤ N ≤ 2 × 10^5
// 1 ≤ planets[i] ≤ 10^9 

function getPlanetToDestroy(planets) {
    // Write your code here
    
    // let stable = true;
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i=0; i<planets.length; i++) {
        const planet = planets[i];
        if (i%2 === 0) evenSum += planet;
        else oddSum += planet;
    }
    
    const difference = evenSum - oddSum;
    
    let evenSum2 = 0;
    let oddSum2 = 0;
    
    for (let i=0; i<planets.length; i++) {
        const planet = planets[i];
        if (i%2 === 0) {
            evenSum -= planet;
            if (evenSum2 + oddSum == oddSum2 + evenSum) return i + 1;
            evenSum2 += planet;
        }
        else {
            oddSum -= planet;
            if (evenSum2 + oddSum == oddSum2 + evenSum) return i + 1;
            oddSum2 += planet;
        }
    }
    return -1;
}
