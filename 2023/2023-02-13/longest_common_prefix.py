def longestCommonPrefix(strs) -> str:
        ans = ''

        for letters in zip(*strs):
            if len(set(letters)) != 1:
                break
            ans += letters[0]
        
        return ans
    
    
# no zip version
from collections import defaultdict as ddict
def longest_common_prefix(strs) -> str:
    if len(strs) == 0:
        return ''
    if len(strs) == 1:
        return strs[0]


    ans = ''
    letter_groups = ddict(list)

    for word in strs:
        for i in range(len(word)):
            letter_groups[i].append(word[i])

    for j in range(len(letter_groups)):
        if len(letter_groups[j]) != len(strs) or len(set(letter_groups[j])) != 1:
            break
        ans += letter_groups[j][0]

    return ans