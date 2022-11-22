def htmlElements(s): # BigO(n)
    stack = []
    eles = {'d', 'b', 'e', 'p', 'i'}
    
    for idx in range(1, len(s)):
        char = s[idx]
        if char in eles:
            if s[idx-1] == '<':
                stack.append(char)
            elif s[idx-1] == '/' and stack[-1] == char:
                stack.pop()
                
    if len(stack) == 0:
        return True
    else:
        return {'d': 'div', 'e': 'em'}.get(stack[-1], stack[-1])