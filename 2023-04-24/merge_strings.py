def merge_alt(word1, word2): # Time(n) Space(n) if we counting the space taken out the output or Space(1) if not.
    l, r = 0, 0
    res = str()

    while l < len(word1) and r < len(word2):
        res += word1[l] + word2[r]
        l += 1
        r += 1

    return res + word1[l:] + word2[r:]