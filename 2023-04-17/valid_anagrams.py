# Counter solution
from collections import Counter
def is_anagrams(s):
    if len(s) == 1:
        return True
    
    key = Counter(s[0])
    
    for word in s[1:]:
        if key != Counter(word):
            return False
        
    return True

# regular dict solution
from collections import defaultdict as ddict
def is_anagrams(s):
    if len(s) == 1:
        return True
    
    key = ddict(int)
    for letter in s[0]:
        key[letter] += 1
    
    
    for word in s[1:]:
        to_compare = ddict(int)
        for letter in word:
            to_compare[letter] -= 1
        
        if len(key) != len(to_compare):
            return False
        
        for k in key:
            if key[k] + to_compare[k] != 0:
                return False
        
    return True