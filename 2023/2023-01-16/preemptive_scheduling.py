def getTotalExecutionTime(n, logs):
    funcs = [0 for _ in range(n)]
    stack = []
    last = 0
    
    for order in logs:
        id, event, timestamp = order.split(':')
        id, timestamp = int(id), int(timestamp)
        
        
        if event == 'start':
            if len(stack) == 0:
                stack.append(id)
                last = timestamp
                continue
            
            top = stack[-1]
            funcs[top] += timestamp - last
            last = timestamp
            stack.append(id)
            
        else:
            stack.pop()
            funcs[id] += timestamp - last + 1
            last = timestamp + 1
        
    return funcs