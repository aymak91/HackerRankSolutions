// A binary number is represented as a series of 0's and 1's. In this challenge, the series will be in the 
// form of a singly-linked list. Each node instance, a LinkedListNode, has a value, data, and a pointer to the 
// next node, next. Given a reference to the head of a singly-linked list, convert the binary number 
// represented to a decimal number.

// Example
// binary -> 0 -> 1 -> 0 -> 0 -> 1 -> 1 -> null
// Linked list corresponding to the binary number (010011)[2] or (19)[10].
 
// Function Description
// Complete the function getNumber in the editor below.

// getNumber has the following parameter(s):
//     binary:  reference to the head of a singly-linked list of binary digits

// Returns:
//     int: a (long integer)[10] representation of the binary number

// Constraints
// 1 ≤ n ≤ 64
// All LinkedListNode.data ∈ {01}
// The described (integer)[2] < 264

/*
 * Complete the 'getNumber' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_SINGLY_LINKED_LIST binary as parameter.
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

function getNumber(binary) {
    // Write your code here
    console.log(binary)
    let total = 0n;
    while (binary !== null) {
        total *= 2n;
        total += BigInt(binary.data);
        binary = binary.next;
    }
    return total;

}
