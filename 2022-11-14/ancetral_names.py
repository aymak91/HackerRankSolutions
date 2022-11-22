def roman_to_int(num: str) -> int: # BigO(n)
    num = num.lower()
    nums = {
        'i': 1,
        'v': 5,
        'x': 10,
        'l': 50,
        'c': 100,
        'd': 500,
        'm': 1000
    }
    ans = 0
    last_letter = None
    for idx in range(len(num)-1, -1, -1):
        letter = num[idx]
        if not last_letter:
            ans += nums[letter]
            last_letter = letter
            continue

        if nums[last_letter] <= nums[letter]:
            ans += nums[letter]
        else:
            ans -= nums[letter]

    return ans

def key(name: str) -> tuple: # BigO(n) due to calling roman_to_int
    name, roman = name.split()
    return (name, roman_to_int(roman.lower()))

def sortRoman(names: list[str]) -> list[str]: # BigO(n log n)
    return sorted(names, key=key)