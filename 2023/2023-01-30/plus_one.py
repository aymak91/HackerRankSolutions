

def plus_one(digits):
    for i in range(len(digits)-1, -1, -1):
        num = digits[i]
        if num != 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    
    return [1] + digits