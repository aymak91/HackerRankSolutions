from math import ceil

def findTotalCost(arr):
    # Sort the input array in ascending order.
    arr.sort()
    
    # Initialize a variable to keep track of the total cost.
    res = 0
    
    # Get the maximum number from the sorted array.
    max_num = arr[-1]
    
    # Iterate through the array up to the second to last element.
    for i in range(len(arr)-1):
        # Get the current minimum number.
        min_num = arr[i]
        
        # Calculate the cost and add it to the total.
        res += ceil((min_num + max_num) / (max_num - min_num + 1))
        
        # Update the maximum number for the next iteration.
        max_num += min_num
        
    # Return the total cost.
    return res
