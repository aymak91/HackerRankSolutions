def delete_from_end(head, k):
    # Create a new node as the head of the modified list
    new_head = SinglyLinkedListNode('list-head')
    new_head.next = head
    
    # Initialize two pointers for the window
    window_front, window_back = new_head, new_head
    
    # Move the window_front pointer k positions forward
    for _ in range(k):
        window_front = window_front.next
        
    # Move both pointers until window_front reaches the end
    while window_front and window_front.next:
        window_front = window_front.next
        window_back = window_back.next
    
    # Skip the node that needs to be deleted
    window_back.next = window_back.next.next
    
    # Return the modified list
    return new_head.next