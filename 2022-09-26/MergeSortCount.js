// Merge sort is one of the most well-known sorting algorithms. In this problem, mergesort takes an array of unique integers as a parameter and returns the sorted array.

// An array has n elements. If the array has less than 2 elements, then the array is returned without any changes. If the array has more than two elements, then it is divided into two arrays, left and right. The left array contains the first half elements of the input array while the right array contains the second half of the elements. If n is odd, the left array takes the middle element. Next, the algorithm calls itself first with the left array and then with the right array. After that, the algorithm produces the sorted array, by merging the left and the right arrays into a single sorted array. In this challenge, keep a count for each of the elements in the input array. Initially, all counts are 0. Whenever an integer k from the right array is merged before at least one element from the left array, add 1 to the count. Find the maximum count value after the merge sort algorithm finishes.

// Example
// arr = [2, 3, 1]

// All counters are initialized to 0. First, the mergesort divides the input array into left = [2,3] and right = [1]. Next, it runs itself again with the left array. It divides this array into [2] and [3]. Since both are sorted, it merges them, and during the merge 3 is merged after 2 into the sorted order, so nothing is added to the counter. After the merge, the algorithm returns [2,3] to its caller. Next, the initial mergesort call runs itself for the right array [1] but since it has only one element no merging is performed and [1] is returned immediately. Next, the algorithm merges [2,3] with [1]. Since 1 from the right array comes before both elements from the left array during the merge, we add 1 to the counter. After this merge, the algorithm finishes, and the maximum count after the process is 1.

// Function Description 
// Complete the function largestCountValue in the editor below. The function must return an integer that denotes the maximum count value after the entire merge sort algorithm finishes for the input array arr.

// The function has the following parameter(s):
// arr: integer array of size n with all unique elements   
 

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ arr[i] ≤ 109
// all elements of arr are distinct
 
/*
 * Complete the 'largestCountValue' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

/*
 * Complete the 'largestCountValue' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function largestCountValue(a) {
    // Write your code here
    
    let count = {};
    for (let int of a) count[int] = 0;
    
    const merge = (left, right) => {
        let merged = [];
        
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                    merged.push(left.shift());
            } else {
                    count[right[0]]++;
                    merged.push(right.shift());
            }
        }
        merged = merged.concat(left, right);
        return merged;
    }
    
    const mergeSort = (arr) => {
        if (arr.length < 2) return arr;
        const midpoint = Math.floor((arr.length-1) / 2);
        const sortedLeft = mergeSort(arr.slice(0, midpoint+1));
        const sortedRight = mergeSort(arr.slice(midpoint+1));
        return merge(sortedLeft, sortedRight);
    }
    
    mergeSort(a);
    return Math.max(...Object.values(count));
}