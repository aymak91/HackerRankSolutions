def getSearchResults(words, queries):
    anas = {''.join(sorted(k)): list() for k in queries }
    words.sort()
    
    for word in words:
        if (s_word := ''.join(sorted(word))) in anas:
            anas[s_word].append(word)
    
    ans = [anas[''.join(sorted(x))] for x in queries]
    return ans