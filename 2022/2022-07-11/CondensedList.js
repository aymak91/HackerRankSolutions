// Given a list of integers, remove any nodes that have values that have previously occurred in the list and return a reference to the head of the list.

// For example, the following list has a recurrence of the value 3 initially:

//      3 -> 4 -> 3 -> 6
//      3 -> 4 -> 6
 
// PS Example
// Remove the node at position 2 in the list above, 0 based indexing.
 

// Function Description 
// Complete the function condense in the editor below.

// condense has the following parameter(s):
//     head:  the head of a singly-linked list of integers, a LinkedListNode

// Note:. A LinkedListNode has two attributes: data, an integer, and next, a reference to the next item in the list or the language equivalent of null at the tail.

// Returns
//     reference to LinkedListNode: the head of the list of distinct values

// Constraints
// 1 ≤ n ≤ 10^5
// 0 ≤ LinkedListNode[i].val ≤ 1000

/*
 * Complete the 'condense' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function condense(head) {
    // Write your code here
    
    const dummyHead = new SinglyLinkedListNode();
    dummyHead.next = head;
    const visited = new Set();
    
    let prev = dummyHead;
    let current = head;
    
    while (current !== null) {
        
        if (visited.has(current.data)) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        
        visited.add(current.data);
        current = current.next;
    }
    
    return dummyHead.next;

}