def pol_notation(tokens):
    stack = []
    opera = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: int(x / y)
    }

    for i in tokens:
        if i not in opera:
            stack.append(int(i))
        else:
            num2 = stack.pop()
            num = stack.pop()
            stack.append(opera[i](num, num2))

    return stack[0]