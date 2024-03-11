def getFinalData(data, updates):
    # Initialize a prefix list with zeros to keep track of update counts
    prefix = [0] * (len(data) + 5)
    
    # Perform updates on the prefix list based on the given ranges
    for l, r in updates:
        prefix[l] += 1  # Increment update count at starting index
        prefix[r+1] -= 1  # Decrement update count at ending index (plus one to cancel out the increment)
        
    # Calculate cumulative sum of update counts in the prefix list
    for i in range(1, len(data) + 5):
        prefix[i] += prefix[i - 1]
        
    # Update the data list based on the parity of the update counts
    for i in range(len(data)):
        if prefix[i+1] % 2:
            data[i] *= -1  # Change the sign of the value if the update count is odd
            
    return data