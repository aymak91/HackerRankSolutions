def smallest_not_included(A): # time(n) space(n)
    seen = set(A)
    res = 1
    
    while res in seen:
        res += 1
        
    return res
