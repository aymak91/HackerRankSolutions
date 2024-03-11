def get_odds_then_remove(node):
    new_link = SinglyLinkedListNode(None)
    old_link = SinglyLinkedListNode(None)
    old_link.next = node
    res1 = new_link
    res2 = old_link
    
    while old_link and old_link.next:
        if old_link.next:
            new_link.next = SinglyLinkedListNode(old_link.next.data)
            new_link = new_link.next
            
        old_link.next = old_link.next.next
        old_link = old_link.next

    return res1.next, new_link, res2.next


def createLinkedList(head):
    dummy = SinglyLinkedListNode(None)
    res = dummy
    
    while head:
        new_link, new_link_tail, head = get_odds_then_remove(head)
        dummy.next = new_link
        dummy = new_link_tail
    
    return res.next