def minStart(arr):
    ans = 0
    curr = 0
    
    for num in arr:
        curr += num
        if curr < 1:
            ans += 1 - curr
            curr = 1
            
    if ans == 0:
        ans = 1
    return ans