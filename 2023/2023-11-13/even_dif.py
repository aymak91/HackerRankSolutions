def findLongestSubsequence(arr):
    arr.sort()  # Sort the array
    lo = fo = -1  # Initialize last and first odd number indices
    le = fe = -1  # Initialize last and first even number indices
    
    for i in range(len(arr)):  # Iterate over the array
        num = arr[i]  # Current number
        
        if num % 2 == 0:  # If the number is even
            le = i  # Update the last even number index
            if fe == -1:  # If this is the first even number
                fe = i  # Update the first even number index
                
        if num % 2 != 0:  # If the number is odd
            lo = i  # Update the last odd number index
            if fo == -1:  # If this is the first odd number
                fo = i  # Update the first odd number index
                
    res = 1  # Initialize the result as 1
    if fo != -1:  # If there is at least one odd number
        res = max(res, lo - fo + 1)  # Update the result with the length of the longest subsequence of odd numbers
    if fe != -1:  # If there is at least one even number
        res = max(res, le - fe + 1)  # Update the result with the length of the longest subsequence of even numbers
    return res  # Return the result
