def malarkey_sort(arr):
    ans = list()
    arr.sort()
    l, r = 0, len(arr)-1
    flip = False
    
    while l <= r:
        if flip:
            ans.append(arr[l])
            l += 1
            flip = not flip
        else:
            ans.append(arr[r])
            r -= 1
            flip = not flip
            
    return ans
