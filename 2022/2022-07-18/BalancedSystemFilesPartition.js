// The directory structure of a system disk partition is represented as a tree. Its n directories are numbered from 0 to n-1, where the root 
// directory has the number 0. The structure of the tree is defined by a parent array, where parent[i] = j means that the directory i is a 
// direct subdirectory of j. Since the root directory does not have a parent, it will be represented as parent[0] = -1. The value in 
// files_size[i] denotes the sum of the sizes in kilobytes of the files located in directory i, but excluding its subdirectories. 
// The size of the content of a directory is defined as the size of all files contained in this directory, plus the sum of the sizes of 
// all of its subdirectories. Partition the tree into two smaller ones by cutting one branch so that the sizes of the resulting subtrees 
// are as close as possible.

// Example
// parent = [-1, 0, 0, 1, 1, 2]
// files_size = [1, 2, 2, 1, 1, 1] 

// The structure of the system is shown in the diagram below. The nodes are labeled as <directory>/<file_size>.

// Cut the branch between directories 1 and 0.
// The partition {0, 2, 5} has size files_size[0] + files_size[2] + files_size[5] = 1 + 2 + 1 = 4.
// The partition {1, 3, 4} has size files_size[1] + files_size[3] + files_size[4] = 2 + 1 + 1 = 4.
// The absolute difference between the sizes of the two new trees is 4 - 4 = 0.
// Since no other partition can have a smaller absolute difference, the final answer is 0.

// Function Description 
// Complete the function mostBalancedPartition in the editor below.

// The function has the following parameter(s):
//     int parent[n]: each parent[i] is the parent directory of directory i
//     int files_size[n]: each file_sizes[i] is the sum of file sizes in directory i

// Returns
//     int: the minimum absolute difference in the size of content between two subtrees
 
// Constraints
// 2 ≤ n ≤ 10^5
// 1 ≤ files_size[i] ≤ 10^4
// parent[0] = -1
// parent[i] < i for 1 ≤ i < n
// The depth of each directory tree is at most 500.


/*
 * Complete the 'mostBalancedPartition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY parent
 *  2. INTEGER_ARRAY files_size
 */

function mostBalancedPartition(parent, files_size) {
    // Write your code here
    
    const nodes = parent.length;
    for(let i=nodes-1; i>=0; i--){
        files_size[parent[i]]+=files_size[i];
    }

    
    const totalSize = files_size[0];
    let minDiff = totalSize;
    files_size.forEach(size => {
        const diff = Math.abs(totalSize - 2*size);
        
        minDiff = Math.min(diff, minDiff)
    })
    return minDiff;
}

