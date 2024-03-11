def compressedString(message):
    # Initialize an empty string to store the compressed message
    res = ''
    # Initialize seen as an empty string and count as 0
    seen, count = '', 0
    
    # Iterate over each letter in the message
    for letter in message:
        # If the current letter is not the same as the previously seen letter
        if letter != seen:
            # Append the seen letter and its count to the result string
            # If count is 1 or less, append nothing after the letter
            res += f'{seen}{count if count > 1 else ""}'
            # Update seen to the current letter and reset count
            seen = letter
            count = 0
            
        # Increment count for each occurrence of the letter
        count += 1
    # Append the last seen letter and its count to the result string
    res += f'{seen}{count if count > 1 else ""}'
        
    # Return the compressed string
    return res