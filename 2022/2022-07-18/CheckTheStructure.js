// A binary tree uses a multi-node data structure where each node may have 0 to 2 child nodes, and has one stored value, 
// its node number in this case. A tree may either be:

// An empty tree, the root is null.
// A non-empty tree with a non-null root node that contains a value and up to 2 subtrees, left and right, which are also binary trees.
 

// A binary tree is classified as a binary search tree (BST) if all of the non-null nodes exhibit two properties:

//     The left subtree of each node contains only nodes with values that are lower than its own value.
//     The right subtree of each node contains only nodes with values that are higher than its own value.
 

// A pre-order traversal is a recursive tree traversal method where the current node is visited first, then the left subtree, and then the right subtree. The following pseudocode parses a tree into a list using pre-order traversal:

//     If the root is null, return the null list.
//     For a non-null root node:
//     Create a pre-order traversal list, left, of the left subtree.
//     Create a pre-order traversal list, right, of the right subtree.
//     Return the concatenated list: the non-null node + left + right.
    

// Given a pre-order traversal history of a binary tree, check whether the path represents a valid BST or not. Return a string, either YES if the path can represent a valid BST, or NO if it cannot.
 
// Example
// nodes = [2, 1, 3, 4, 5]

// The root node will always be the first node in the array. In this case, the root is at node 2
// The next value, 1 is less than 2. Place the node 1 at the left of node 2.
// The next value, 3 is greater than 2. Place the node 3 at the right of node 2.
// The next value, 4 is greater than 3. Place the node 4 at the right of node 3.
// The next value, 5 is greater than 4. Place the node 5 at the right of node 4.
// This graph meets the definition of a BST.
 
// Function Description 
// Complete the isValid function below.

// isValid has the following parameter:
//     int a[n]: An array of integers, the values in the order encountered in the traversal of the tree.

// Returns:
//     string: either the string YES if the path represents a valid BST, or NO otherwise

// Constraints
// 1 ≤ q ≤ 10
// 1 ≤ n, a[i] ≤ 100

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function isValid(a) {
    console.log(a)
  let root = a.shift();
  let prevMax = -Infinity;
  let currMax = -Infinity;
  let currMin = -Infinity;

  for (let x, i = 0; i < a.length; i++) {
    x = a[i];
    console.log(x)
    console.log('pmx', prevMax, 'cmx', currMax, 'cmin', currMin)
    if (x < prevMax || x < currMin) return "NO";
    
    if (x > currMax) {
      currMin = currMax;
      currMax = x;
    }

    if (x > root) {
      prevMax = root;
      root = x;
      currMin = 0;
      currMax = x;
    }
  }

  return "YES";
}

