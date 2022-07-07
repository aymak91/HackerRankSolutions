// In a binary search tree, each node holds a value and a reference to as many as 2 child nodes, or children. 
// The root node has no ancestors. The children are called left and right, and subtrees rooted at left and right 
// are the left and right subtrees. If each node is considered the root of a subtree, each node value in its 
// left subtree must be less than its own value. Likewise, each node in its right subtree must have a greater or 
// equal value to the root. This allows for efficient searching.

// For each value in a list of integers, determine if it is present in a tree . If it is, return the integer 1, otherwise, return 0.

// Function Description

// Complete the function isPresent in the editor below.

// isPresent has the following parameter(s):
//     BSTreeNode root:  reference to the root node of a tree of integers
//     int val[q] : an array of  integer items to search for

// Returns:
//     int[q]: an integer array where each value at index i denotes whether val[i] is found in the BST or not

// Constraints
// 1 ≤ n, q ≤ 10^5
// 1 ≤ val[i] ≤ 5 × 10^4

// Recursive
this.isPresent = function(root, val) {
    // Add your code here
    if (root === null) return 0;
    if (root.data === val) return 1;
    
    if (root.data > val) return this.isPresent(root.left, val);
    return this.isPresent(root.right, val);
};

// Iterative
// this.isPresent = function(root, val) {
    // Add your code here
    
//         let node = root;
    
//         while (node !== null) {
//             if (node.data === val) return 1;
//             if (node.data > val) node = node.left;
//             else node = node.right;
//         }
//         return 0;
// };