def word_pattern(pattern, s):
    s = s.split(' ')
    if len(pattern) != len(s):
        return False
    
    corl = dict()
    seen = set()
    
    for i in range(len(s)):
        pat, word = pattern[i], s[i]
        
        if pat not in corl and word not in seen:
            corl[pat] = word
            seen.add(word)
            
        elif corl.get(pat, None) != word:
            return False
        
    return True
