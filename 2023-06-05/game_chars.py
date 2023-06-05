def numberOfWeakCharacters(properties):
    # Sort the properties list based on attack in ascending order and defense in descending order
    properties.sort(key=lambda x: (x[0], -x[1]))

    stack = []  # Stack to track defense values
    ans = 0  # Variable to count the number of weak characters

    # Iterate over each property (a, d) in the sorted properties list
    for a, d in properties:
        # Compare the defense value with the top element of the stack
        # Pop elements from the stack and increment ans until the stack is empty or the top element is >= current defense value
        while stack and stack[-1] < d:
            stack.pop()
            ans += 1
        stack.append(d)  # Push the current defense value onto the stack

    return ans  # Return the number of weak characters
