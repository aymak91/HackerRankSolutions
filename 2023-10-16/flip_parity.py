def getLargestNumber(num):
    # Initialize an empty list to hold groups of digits.
    digit_groups = [[]]
    
    # Determine the parity of the first digit.
    parity = True if int(num[0]) % 2 != 0 else False
    
    # Iterate through each digit in the input number.
    for char in num:
        # If the parity of the current digit matches the parity of the current group, start a new group.
        if (int(char) % 2 == 0) == parity:
            digit_groups.append([])
            parity = not parity
        
        # Add the current digit to the current group.
        digit_groups[-1].append(str(char))
        
    # Sort each group in descending order and concatenate them to form the output number.
    return ''.join([''.join(sorted(x, reverse=True)) for x in digit_groups])
