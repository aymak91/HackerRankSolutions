// Array Reduction

// There is an array of n integers called num. The array can be reduced by 1 element by performing a move. 
// Each move consists of the following three steps:

// Pick two different elements num[i] and num[j], i ≠ j.
// Remove the two selected elements from the array.
// Add the sum of the two selected elements to the end of the array.
 

// Each move has a cost associated with it: the sum of the two elements removed from the array during the move. 
// Calculate the minimum total cost of reducing the array to one element.

 
// Example
// num = [4,6,8]

// Remove 4 and 6 in the first move at a cost of 4 + 6 = 10, and the resultant array is num' = [8,10].
// Remove 8 and 10 in the second move at a cost of 8 + 10 = 18, and the resultant array is num'' = [18].

// The total cost of reducing this array to one element using this sequence of moves is 10 + 18 = 28. This is just one set of possible moves. 
// For instance, one could have started with 4 and 8. Then 4 + 8 = 12, num' = [6, 12], 6 + 12 = 18, num'' = [18], cost = 12 + 18 = 30.

// Function Description 
// Complete the function reductionCost in the editor below.

// reductionCost has the following parameter(s):
//     int num[n]:  an array of integers

// Return
//     int:  the minimum total cost of reducing the input array to one element

// Constraints
// 2 ≤ n ≤ 104
// 0 ≤ num[i] ≤ 105

function reductionCost(num) {

    // sort least to greatest so that we can get smaller sums to return
    num.sort((a,b) => a - b);

    let cost = 0;

    // run loop until all elements synthesize 
    while (num.length > 1) {
        num.sort((a,b) => a - b);

        // grab first two numbers and remove them from the array
        let first = num.shift();
        let second = num.shift();

        let current = first + second;
        cost += current;

        // if the array is empty, stop
        if (num.length === 0) break;

        num.push(current);
    }

    return cost
}


///// Heap Solution

function reductionCost(num) {
    // Write your code here
    
    let cost = 0;
    let minHeap = new Heap();
    minHeap.heapify(num);
    console.log(minHeap)
    
    while (minHeap.length()) {
        const first = minHeap.poll();
        const second = minHeap.poll();
        const current = first + second;
        cost+= current;
        // console.log(minHeap)
        if (minHeap.length() === 0) break;
        
        minHeap.push(current);
    }
    
    return cost;

}

class Heap {
    constructor() {
        this.data = [];
    }

    heapify(nums) {
        
        for (let num of nums) {
            this.push(num);
        }
    }

    length() {
        return this.data.length;
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i) {
        return i*2+1;
    }

    getRightChildIndex(i) {
        return i*2+2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(val) {
        this.data[this.data.length] = val;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIdx = this.data.length-1;

        while (this.data[currentIdx] < this.data[this.getParentIndex(currentIdx)]) {
            this.swap(currentIdx, this.getParentIndex(currentIdx));
            currentIdx = this.getParentIndex(currentIdx);
        }
    }

    poll() {
        const minValue = this.data[0];

        this.data[0] = this.data[this.data.length-1];
        this.data.length--;
        this.heapifyDown();
    
        return minValue;
    }

    heapifyDown() {
        let currentIdx = 0;

        while (this.data[this.getLeftChildIndex(currentIdx)] != undefined) {
            let smallestChildIdx = this.getLeftChildIndex(currentIdx);

            if (this.data[this.getRightChildIndex(currentIdx)] != undefined && this.data[this.getRightChildIndex(currentIdx)] < this.data[this.getLeftChildIndex(currentIdx)])  {
                smallestChildIdx = this.getRightChildIndex(currentIdx);
            }

            if (this.data[currentIdx] > this.data[smallestChildIdx]) {
                this.swap(currentIdx, smallestChildIdx);
                currentIdx = smallestChildIdx;
            } else {
                return;
            }
        }
    }

}
