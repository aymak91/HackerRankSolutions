from collections import defaultdict as ddict

def isAnagram(s, t): # time(n) space(m)
    if len(s) != len(t):
        return False
    
    counter = ddict(int)
    
    for i in range(len(s)):
        counter[s[i]] += 1
        counter[t[i]] -= 1
        
    for v in counter.values():
        if v != 0:
            return False
        
    return True
    