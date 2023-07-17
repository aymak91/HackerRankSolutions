def deleteEven(listHead):
    dummy = SinglyLinkedListNode('dummy')
    dummy.next = listHead
    curr = dummy
    
    while curr.next:
        if curr.next.data % 2 == 0:
            curr.next = curr.next.next
            continue
            
        curr = curr.next
    
    return dummy.next
    