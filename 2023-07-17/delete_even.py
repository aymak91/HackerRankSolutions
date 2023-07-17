def deleteEven(listHead):
    # Create a dummy node and set it as the next node of the dummy
    dummy = SinglyLinkedListNode('dummy')
    dummy.next = listHead
    curr = dummy
    
    # Iterate until there is a next node
    while curr.next:
        # Check if the data of the next node is even
        if curr.next.data % 2 == 0:
            # If the data is even, skip the next node by updating the next pointer
            curr.next = curr.next.next
            continue
            
        # If the data is not even, move to the next node
        curr = curr.next
    
    # Return the next node after the dummy node, which represents the modified linked list
    return dummy.next
