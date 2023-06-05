from collections import Counter

def findOriginalArray(changed):
    # Create a frequency map of the numbers in the changed array
    count = Counter(changed)
    
    # If the frequency of 0 is odd, it's not possible to form a valid original array
    if count[0] % 2 == 1:
        return []
    
    # Iterate over the numbers in ascending order
    for num in sorted(count):
        # If the frequency of the current number is greater than the frequency of its double,
        # it's not possible to form a valid original array
        if count[num] > count[2 * num]:
            return []
        
        # If the current number is non-zero, subtract its frequency from the frequency of its double
        if num:
            count[2 * num] -= count[num]
        else:
            # If the current number is zero, update the frequency of its double to be half of its own frequency
            count[2 * num] = count[num] // 2
    
    # Return the elements in the frequency map as the original array
    return list(count.elements())
