def maxPosPrefixes(arr):
    # Sort the input array in descending order
    arr.sort(reverse=True)
    
    # Initialize variables to keep track of cumulative sum and maximum number of positive prefixes
    count = 0
    res = 0
    
    # Iterate over each element in the sorted array
    for num in arr:
        # Increment the cumulative sum by the current element
        count += num
        
        # Check if the cumulative sum is positive
        if count > 0:
            # If the sum is positive, increment the number of positive prefixes
            res += 1

    # Return the maximum number of positive prefixes
    return res
