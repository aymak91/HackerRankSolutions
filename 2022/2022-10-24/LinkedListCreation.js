// There is a singly linked list of n nodes. Each node instance, a SinglyLinkedListNode, 
// has an integer value, data, and a pointer to the next node, next. Perform the following 
// operations to generate a new linked list.

// 1. Select all the nodes at odd positions.
// 2. Append these nodes to the new linked list keeping them in their original order.
// 3. Delete these nodes from the old linked list.
// 4. Repeat from step 1 until there are no nodes left in the old linked list.

// Return a reference to the head of the final linked list.

// Note: Extra memory other than creating some new nodes should not be used for the implementation.

// Example
// The initial linked list is:
//     1 -> 5 -> 2 -> 7 -> 8 -> 3
// Move nodes in odd positions to the new linked list.
//     1 -> 2 -> 8                5 -> 7 -> 3
// Repeat the process.
//     1 -> 2 -> 8 -> 5 -> 3           7
// With only one node, this is the final iteration. Move the last node to the new list.
//     1 -> 3 -> 8 -> 5 -> 3 -> 7

// Return a reference to the head of this list.
 

// Function Description
// Complete the function createLinkedList in the editor below.

 
// createLinkedList has the following parameter:
//     head: reference to the head of a linked list of n integers

// Returns
//     a reference to the head of the final linked list.

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ data ≤ 10^9

/*
 * Complete the 'createLinkedList' function below.
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


function createLinkedList(head) {
    // Write your code here
    const dummyHead = new SinglyLinkedListNode();
    let newCurr = dummyHead;

    // while the old linked list has a node
    while (head) {
        let oldPrev = null; // keep track of prev in old LL
        let oldCurr = head; // current node (odd) in old LL 
        head = head.next; // set new head node to be the next one
        
        // loop through old LL until reach end (oldCurr is always the odd node to add to new LL)
        while (oldCurr) {
            // if there is a prev, update the old LL's prev.next to point to the oldCurr.next,
            if (oldPrev) oldPrev.next = oldCurr.next;  
            
            // set new LL's curr.next ot be oldCurr
            newCurr.next = oldCurr;
            // update newCurr's pointer
            newCurr = newCurr.next;
            
            // update old LL's prev and curr to jump two nodes over
            oldPrev = oldCurr.next;
            oldCurr = oldPrev?.next;
        }
    
    }
    
    // return new LL's head = dummy's next
    return dummyHead.next;
    
}