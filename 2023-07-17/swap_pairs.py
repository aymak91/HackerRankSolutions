def swapPairs(head):
    # If the list is empty or contains only one node, return the head as it is
    if not head or not head.next:
        return head
    
    # Create a dummy node and set it as the next node of the dummy
    dummy = SinglyLinkedListNode('dummy')
    dummy.next = head
    curr = dummy
    
    # Iterate until there are at least two more nodes after the current node
    while curr.next and curr.next.next:
        # Assign variables to the current node and the next node after it
        n_node = curr.next
        a_node = curr.next.next
        
        # Preserve the reference to the next node after a_node
        nxt = a_node.next
        
        # Swap the positions of n_node and a_node
        a_node.next = n_node  # a_node now points to the current node
        n_node.next = nxt     # n_node now points to the node after a_node
        
        # Update the next node after curr to point to a_node
        curr.next = a_node
        
        # Move curr two steps forward to continue with the next pair of nodes
        curr = curr.next.next
    
    # Return the next node after the dummy node, which represents the modified linked list
    return dummy.next
