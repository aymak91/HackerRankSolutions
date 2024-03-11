def getMinLength(seq):
    # create our stack
    stack = list()
    
    for char in seq:
        # if we ever see a 'A' just put it in the stack
        if char == 'A':
            stack.append(char)
            
        # else (meaning it has to be a 'B') if there is something in the stack, regardless of what it is, we can pop it off
        # since 'AB' and 'BB' are pairs, so if char is B it doesn't matter whats in the stack
        elif stack:
            stack.pop()
            
        # if the stack is empty we will append the char (which will be 'B') to the stack
        else:
            stack.append(char)
        
    # our answer will be the length of the stack
    return len(stack)