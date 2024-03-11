def findLowestStartingStair(jumps):
    res = 0  # variable to track the lowest cumulative count
    count = 0  # variable to track the current cumulative count
    
    for jump in jumps:  # iterate over each jump
        count += jump  # add the current jump to the cumulative count
        res = min(res, count)  # update the lowest cumulative count
        
    return max(0, -res) + 1  # return the absolute value of the lowest cumulative count plus 1
