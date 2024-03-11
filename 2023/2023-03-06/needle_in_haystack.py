def first_occurrence(haystack, needle):
    window = len(needle)

    for l in range(len(haystack)):
        if window > len(haystack):
            break

        if haystack[l:window] == needle:
            return l

        window += 1

    return -1