// A coding competition is being organized on the HackerRank platform. 
// The participants need to be grouped into teams where each team has exactly two candidates. 

// There are n candidates, where each candidate has a skill denoted by skill[i]. A total of 
// (n/2) teams are to be formed, such as the total skill of each team is the same. For example, 
// if skill = [1, 2, 3, 2], then they can be paired as [[1, 3], [2, 2]] because the total skill 
// of each team is the same, i.e., 4.

// The efficiency of a team is defined as the product of the skill levels of its two members, i.e., 
// for the skills [1, 3], the efficiency of the team is 1 * 3 = 3. Find the total sum of efficiencies 
// of all teams that can be formed satisfying the criterion above. If there is no way to team them to 
// satisfy the conditions, return -1.


// Note: It can be shown that the answer is always unique. 

// Example
// The skills of the candidates are skill = [1, 2, 3, 2]. They can be paired as [[1, 3], [2, 2]]. The sum of skills for each team is the same, i.e., 4.
// The efficiency is computed as:

//     Efficiency of [1, 3] = 1 * 3 = 3
//     Efficiency of [2, 2] = 2 * 2 = 4

// Return the sum of efficiencies, 3 + 4 = 7.

// Function Description
// Complete the function getTotalEfficiency in the editor below.

// getTotalEfficiency has the following parameter:
//     int skill[n]: the skill of each candidate

// Returns
//     long_int: the sum of the efficiencies

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ skill[i] ≤ 10^5
// n is even.
// It is guaranteed that the answer is unique.

/*
 * Complete the 'getTotalEfficiency' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY skill as parameter.
 */

function getTotalEfficiency(skill) {
    // Write your code here
    
    skill.sort((a,b) => a-b);
    let [left, right] = [0, skill.length - 1];
    let sum = skill[0] + skill[right];
    let efficiencySum = 0;
    
    while (left < right) {
        if (skill[left] + skill[right] !== sum) return -1;
        
        efficiencySum += skill[left] * skill[right];
        left++;
        right--;
    }
    return efficiencySum;
}

