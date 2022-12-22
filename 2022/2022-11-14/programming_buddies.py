def minNum(samDaily, kellyDaily, difference): # BigO(n)
    if samDaily >= kellyDaily:
        return -1
    
    d1, d2 = 0+difference, 0
    days = 0
    while d1 >= d2:
        d1 += samDaily
        d2 += kellyDaily
        days += 1
        
    return days