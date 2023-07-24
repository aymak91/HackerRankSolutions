def smashTheBricks(bigHits, newtons):
    idxs = {k: v + 1 for v, k in enumerate(newtons)}  # create a dictionary to map each value in newtons to its index plus 1
    bricks = sorted(newtons)  # sort the newtons list in ascending order
    
    count = 0  # variable to keep track of the total count
    bighits = list()  # list to store indices of bricks hit with bigHits
    smallhits = list()  # list to store indices of bricks hit without bigHits
    
    while bricks:  # continue looping until there are no more bricks
        brick = bricks.pop()  # remove the brick from the end of the bricks list
        if bigHits:  # if there are remaining bigHits
            bigHits -= 1  # decrement the bigHits count by 1
            count += 1  # increment the total count by 1
            bighits.append(idxs[brick])  # add the index of the brick to the bighits list
        else:
            count += brick  # add the value of the brick to the total count
            smallhits.append(idxs[brick])  # add the index of the brick to the smallhits list
            
    for l in [bighits, smallhits]:  # iterate over the lists bighits and smallhits
        if l:
            l.sort()  # sort the list in ascending order if it is not empty
        else:   
            l.append(-1)  # if the list is empty, add -1 as a placeholder
            
    return [[count], bighits, smallhits]  # return a list containing the total count, bighits, and smallhits
