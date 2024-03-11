
def containsDuplicate(nums):
    counter = dict()
    
    for num in nums:
        if not num in counter:
            counter[num] = 0
            
        counter[num] += 1
        if counter[num] > 1:
            return True
        
    return False