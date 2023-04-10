from collections import defaultdict as ddict

def arrange(sentence):
    words = ddict(list)
    res = list()
    largest = float('-inf')
    smallest = float('inf')
    
    for word in sentence[:-1].split():
        words[len(word)].append(word.lower())
        largest = max(largest, len(word))
        smallest = min(smallest, len(word))
        
    for i in range(smallest, largest+1):
        res.extend(words[i])
        
    res[0] = res[0].capitalize()
    res[-1] += '.'
    
        
    return ' '.join(res)


print(arrange('That mean old cat named a.'))