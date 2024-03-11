def balancedSum(arr):
    n = len(arr)
    low, high = 0, n - 1
    
    while low <= high:
        mid = (low + high) // 2
        
        left_sum = sum(arr[:mid])
        right_sum = sum(arr[mid+1:])
        
        if left_sum == right_sum:
            return mid
        elif left_sum > right_sum:
            high = mid - 1
        else:
            low = mid + 1
            
    return -1