

def reverseParentheses(s: str) -> str:
        stack = []
        closers = []
        for char in s:
            if len(stack) > 0:
                if char == ')':
                    parStart = closers.pop()
                    
                    stackEnd = stack[parStart+1:]
                    stack = stack[:parStart] + stackEnd[::-1]
                    
            if char != ')':
                stack.append(char)
                if char == '(':
                    closers.append(len(stack)-1)
            
            
        return ''.join(stack)
            
    
    