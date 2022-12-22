// The janitor of a high school is extremely efficient. By the end of each day, all of the school's waste is in plastic bags weighing between 1.01 pounds and 3.00 pounds. All plastic bags are then taken to the trash bins outside. One trip is described as selecting a number of bags which together do not weigh more than 3.00 pounds, dumping them in the outside trash can and returning to the school. Given the number of plastic bags n, and the weights of each bag, determine the minimum number of trips the janitor has to make.

// Example
// n = 5 
// weight = [1.01, 1.99, 2.5, 1.5, 1.01]

// The janitor can carry all plastic bags out in 3 trips: [1.01 + 1.99 , 2.5, 1.5 + 1.01].

 
// Function Description
// Complete the function efficientJanitor in the editor below.

 

// efficientJanitor has the following parameter(s):
//     float weight[n]:  weights of the bags

 

// Returns
//     int:  the minimum number of trips required

// Constraints
// 1 ≤ n ≤ 1000
// 1.01 ≤ weight[i] ≤ 3.0