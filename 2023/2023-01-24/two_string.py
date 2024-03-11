def check(word: str, seen: set) -> None:
    for letter in word:
        if letter in seen:
            print('YES')
            return None
    print('NO')

def commonSubstring(a, b) -> None:
    for i in range(len(a)):
        check(a[i], set(b[i]))