#
# Complete the 'twin_sum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
#

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#


def twin_sum(head) -> int:
    fast, slow = head, head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next

    curr, prev = slow, None
    while curr:       
        curr.next, prev, curr = prev, curr, curr.next 

    maximun = float('-inf')
    while prev:
        maximun = max(maximun, prev.data + head.data)
        prev = prev.next
        head = head.next
    return maximun