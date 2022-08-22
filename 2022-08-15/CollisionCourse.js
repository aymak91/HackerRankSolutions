// There are n particles numbered from 0 to n − 1 lined up from smallest to largest ID along the x-axis. 

// The particles are all released simultaneously. Once released, each particle travels indefinitely in a
// straight line along the positive x-axis at a speed. When two particles collide, the faster particle moves 
// through the slower particle and they both continue moving without changing speed or direction. Given a 
// list of particle speeds for particles arranged left to right by position, determine the number of collisions 
// that occur with the particle that starts at index pos.

// Example
// n=2
// speed = [2, 1]
// pos = 0

// Speeds are labeled on the particles. Particle 0 starts at position 0 on the axis and travel right at 
// speed[0] = 2 units per second. At seconds 0 through 3, it is at positions [0, 2, 4, 6].

// Particle 1 starts at position 1 on the axis and travels right at speed[1] = 1 unit per second. 
// At seconds 0 through 3, it is at positions [1, 2, 3, 4].

// Since both of the particles are at position 2 at the same time, they have collided. 
// Particle 0 continues to outpace particle 1 indefinitely so they never collide again. 
// There is one collision that occurs.


// Function Description 
// Complete the function collision in the editor below.

 
// The collision has the following parameter(s):
//     int speed[n]:  An array of integers where speed[i] indicates the speed of particle i.
//     int pos: index of the particle for which to count collisions

// Return
//     int:  the number of collisions occurring with particle pos

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ speed[i] ≤ 10^9
// 0 ≤ pos < n
 

function collision(speed, pos) {
    // Write your code here

    let collisions = 0;
    const particleSpeed = speed[pos];
    
    for (let i=0; i<speed.length; i++) {
        if (speed[i] === particleSpeed) continue;
        const faster = speed[i] > particleSpeed;
        
        if (i < pos && faster) collisions++;
        if (i > pos && !faster) collisions++;
    }
    
    return collisions;
}