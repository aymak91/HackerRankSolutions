def swapPairs(head):
    if not head or not head.next:
            return head
        
    dummy = SinglyLinkedListNode('dummy')
    dummy.next = head
    curr = dummy
    while curr.next and curr.next.next:

        n_node = curr.next
        a_node = curr.next.next

        nxt = a_node.next
        a_node.next = n_node
        n_node.next = nxt
        
        curr.next = a_node

        curr = curr.next.next


    return dummy.next