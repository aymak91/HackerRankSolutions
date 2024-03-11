def countSimilarPairs(words):
    seen = dict()
    pairs = 0
    
    for word in words:
        word = ''.join(sorted(set(word)))
        if seen and word in seen:
            pairs += seen[word]
            seen[word] += 1
        else:
            seen[word] = 1
            
    return pairs