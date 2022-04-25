// The owner of a construction company has a surplus of rods of arbitrary lengths. A local contractor offers to buy any of the surplus, 
// as long as all the rods have the same exact integer length, referred to as saleLength. The number of sellable rods can be increased 
// by cutting each rod zero or more times, but each cut has a cost denoted by costPerCut. After all cuts have been made, any leftover 
// rods having a length other than saleLength must be discarded for no profit. The owner's total profit for the sale is calculated as:

// totalProfit = totalUniformRods × saleLength × salePrice − totalCuts × costPerCut

// where totalUniformRods is the number of sellable rods, salePrice is the per unit length price that the contractor agrees to pay, 
// and totalCuts is the total number of times the rods needed to be cut.

// Example
// lengths = [30, 59, 110]
// costPerCut = 1
// salePrice = 10 per unit length

// The following are tests based on lengths that are factors of 30, the length of the shortest bar. 
// Factors of other lengths might also be tested, but this demonstrates the methodology.

// 			Cuts
// 		---------------------
// Length 	Rod	Extra 	Regular Total 	Pieces 	
// ----------------------------------------------
// 30	30	0	0	0	1
// 	59	1	0	1	1
// 	110	1	2	3	3
// 	Revenue = (10*5*30)-(4*1) = 1496
// 15	30	0	1	1	2
// 	59	1	2	3	3
// 	110	1	6	7	7
// 	Revenue = (10*12*15)-(11*1) = 1789
// 10	30	0	2	2	3
// 	59	1	4	5	5
// 	110	0	10	10	11
// 	Revenue = (10*19*10)-(17*1) = 1883
// 6	30	0	4	4	5
// 	59	1	8	9	9
// 	110	1	17	18	18
// 	Revenue = (10*32*6)-(31*1) = 1889
// 5	30	0	5	5	6
// 	59	1	10	11	11
// 	110	0	21	21	21
// 	Revenue = (10*39*5)-(37*1) = 1913
// 3	30	0	9	9	10
// 	59	1	18	19	19
// 	110	1	35	36	36
// 	Revenue = (10*65*3)-(64*1) = 1886

// Working through the first stanza, length = 30, it is the same length as the first rod, so no cuts are required and there is 1 piece. 
// For the second rod, cut and discard the excess 29 unit rod. No more cuts are necessary and another 1 piece is left to sell. 
// Cut 20 units off the 110 unit rod to discard leaving 90 units, then make two more cuts to have 3 more pieces to sell. 
// Finally sell 5 totalUniformRods , saleLength = 30 at salePrice = 10 per unit length for 1500. The cost to produce was totalCuts = 4 times costPerCut = 1 per cut, or 4. 
// Total revenue = 1500-4=1496. The maximum revenue among these tests is obtained at length 5 for 1913.

 

// Function Description
// Complete the function maxProfit in the editor below.

// maxProfit has the following parameter(s):
//     costPerCut:  cost to make a cut
//     salePrice:  per unit length sales price
//     lengths[n]:  integer rod lengths

// Returns:
//     int:  maximum possible profit

// Constraints
// 1 ≤ n ≤ 50
// 1 ≤ lengths[i] ≤ 104
// 1 ≤ salePrice, costPerCut ≤ 1000

function maxProfit(costPerCut, salePrice, lengths) {
    // Write your code here
    let maxProfit = -Infinity
    const max = Math.max(...lengths)

    for (let i=1; i<=max; i++) {
        maxProfit = calculate(i, salePrice, costPerCut, lengths, maxProfit);
    }
    return maxProfit;
}

function calculate(cutLength, salePrice, costPerCut, lengths, maxProfit) {
    let profit = 0;

    for (let length of lengths) {
        let totalUniformRods = Math.floor(length/cutLength);
        let totalCuts = Math.ceil(length / cutLength) - 1;
        let currProfit = totalUniformRods * cutLength * salePrice - (costPerCut * totalCuts);
        if (currProfit > 0) profit += currProfit
    }
    return Math.max(maxProfit, profit);
}