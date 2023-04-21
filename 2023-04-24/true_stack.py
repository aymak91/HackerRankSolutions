def real_stack(pushed, popped): # time(n+m) Space(n) if we are counting the space taken by the output otherwise Space(1)
    stack = list()
    popped_idx = 0

    for num in pushed:
        stack.append(num)

        while stack and popped[popped_idx] == stack[-1]:
            popped_idx += 1
            stack.pop()

    return len(stack) == 0