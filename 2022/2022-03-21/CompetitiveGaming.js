// A group of friends are playing a video game together. During the game, each player earns a 
// number of points. At the end of a round, players who achieve at least a certain rank get to 
// "level up" their characters to gain increased abilities. Given the scores of the players at 
// the end of a round, how many players will be able to level up?

// Note: Players with equal scores will have equal ranks, but the player with the next lower 
// score will be ranked based on the position within the list of all players' scores. For example, 
// if there are four players, and three players tie for first place, their ranks are 1, 1, 1, and 4.

// Note:  No player with a score of 0 can level up, regardless of rank.

// Example
// n = 4
// k = 3
// scores = [100, 50, 50, 25]

// These players' ranks are [1, 2, 2, 4]. Because the players need to have a rank of at least 3 to level up, only the first three players qualify. Therefore, the answer is 3.

// Function Description
// Complete the function numPlayers in the editor below.

// numPlayers has the following parameters:
//     int k: an integer denoting the cutoff rank for leveling up a player's character
//     int scores[n]: an array of integers denoting the scores of the players

// Returns:
//     int: the number of players who can level up after this round

// Constraints
// 1 ≤ n ≤ 10^5
// 0 ≤ scores[i] ≤ 100
// k ≤ n

/*
 * Complete the 'numPlayers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY scores
 */

function numPlayers(k, scores) {
    //[100, 100, 50, 25]  k = 3
    let sortedScores = scores.sort((a, b) => b - a);
    let ranks = new Array(sortedScores.length).fill(0); //[1,1,0,0]
    ranks[0] = 1;

    let pos = 2; //4
    for (let i = 1; i < sortedScores.length; i++) {
        
        if (sortedScores[i] === sortedScores[i - 1]) ranks[i] = ranks[i - 1];
        else ranks[i] = pos;
        pos++;
    }

    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
        if (ranks[i] <= k && sortedScores[i] > 0) count++;
    }

    return count;

}
