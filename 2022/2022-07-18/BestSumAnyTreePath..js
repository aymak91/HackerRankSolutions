// Given a tree rooted at node 0 and a value assigned to each node, determine the maximum sum of the values along any path in the tree. 
// The path must not be empty, and in some cases it might not go through the root. The following tree (labeled node number/value) is analyzed below.

// Two of the possible paths are 4 → 0 → 1 → 2 → 3 which has a sum of 15 + 5 + 7 + -10 + 4 = 21 and 1 → 2 → 3 with a sum of 7 + -10 + 4 = 1.  
// A third possible path, the maximum sum path, is 4 → 0 → 1 with a sum of 15 + 5 + 7 = 27.

 

// Function Description 
// Complete the function bestSumAnyTreePath in the editor below. It must return an integer that represents the largest value sum on any non-empty path in the tree.

// bestSumAnyTreePath has the following parameter(s):
// parent int[]: integer array where parent[i] = j means that node j is a parent of node i. parent[0] will be set to -1 to indicate that node 0 is the root of the tree.
// values int[]: integer array where values[i] denotes the value of node i
   

// Constraints
// 1 ≤ n ≤ 10^5
// parent[0] = -1 
// 0 ≤ parent[i] < n for 1 ≤ i < n
// -1000 ≤ values[i] ≤ 1000 
// the parent array defines a valid tree

/*
 * Complete the 'bestSumAnyTreePath' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY parent
 *  2. INTEGER_ARRAY values
 */

function bestSumAnyTreePath(parent, values) {
    // Write your code here
    let maxPath = -1001; 

    
    const children = {};
    parent.forEach((p,child) =>{
        children[p] = children[p] || [];
        children[p].push(child);
    });
   
   const processBenefits = benefitArr => {
       let firstMax = 0;
       let secondMax = 0;
       benefitArr.forEach(benefit => {
           if(benefit > firstMax){
               secondMax = firstMax;
               firstMax = benefit;
           } else if(benefit > secondMax){
               secondMax = benefit;
           }
       });
       return [firstMax, secondMax];
   };
   
   const maxBenefit = root => {
       const rootChildren = children[root] || [];
       const benefits = rootChildren.map(child => maxBenefit(child));
       const [firstMax, secondMax] = processBenefits(benefits)
       const currentMaxPath = values[root] + firstMax + secondMax;
       
       if(currentMaxPath > maxPath) maxPath = currentMaxPath;
       return  values[root] + firstMax;
   }
   
   maxBenefit(0);
   return maxPath;
}
