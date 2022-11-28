def check_pal(pal: str, idx: int) -> bool:
    pal[idx] = 'a'
    return (pal == pal[::-1], pal)

def breakPalindrome(pal_str: str) -> str:    
    pal_str = list(pal_str)
    
    for idx in range(len(pal_str)):
        if pal_str[idx] != 'a':
            check, new_str = check_pal(pal_str, idx)
            if not check:
                return ''.join(new_str)
                
    return "IMPOSSIBLE"