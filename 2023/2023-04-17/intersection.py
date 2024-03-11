from collections import defaultdict as ddict

def intersect(nums1, nums2):
    count = ddict(int)
    res = list()
    
    for num in nums1:
        count[num] += 1
        
    for num in nums2:
        if count[num] > 0:
            res.append(num)
            count[num] -= 1
    
    return res