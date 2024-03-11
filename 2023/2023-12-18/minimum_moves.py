def minimumMoves(arr1, arr2):
    # Initialize a variable to store the result
    res = 0
    
    # The zip function is used to iterate over two lists in parallel.
    # In this case, it is used to iterate over arr1 and arr2 at the same time.
    # For each pair of elements (l1 from arr1 and l2 from arr2), 
    # it converts them to strings and again uses zip to iterate over the digits in parallel.
    # The absolute difference between each pair of digits is then added to the result.
    for l1, l2 in zip(arr1, arr2):
        # Convert the numbers to strings and iterate over the digits
        for num1, num2 in zip(str(l1), str(l2)):
            # Add the absolute difference between the digits to the result
            res += abs(int(num1)-int(num2))
    
    # Return the final result
    return res