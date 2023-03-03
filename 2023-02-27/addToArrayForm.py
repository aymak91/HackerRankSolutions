def addToArrayForm(num, k) -> list:
    k_len = len(str(k))
    
    if sum(num) < k_len:
        num = ([0] * ((k_len) - len(num))) + num

    for i in range(len(num)-1, -1, -1):
        num[i] += k
        k = num[i] // 10
        num[i] %= 10

    if k:
        num.insert(0, k)

    return num