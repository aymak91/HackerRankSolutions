def maxPlanes(startHeight, descentRate):
    # Initialize an empty list to store the order of planes to be fired.
    fire_order = list()
    
    # Iterate over each pair of startHeight and descentRate.
    for h, d in zip(startHeight, descentRate):
        # Calculate the time it takes for the plane to reach the ground and add it to the list.
        fire_order.append(h/d)
    
    # Sort the fire_order list in ascending order of time.
    fire_order.sort()
    
    # Iterate through the sorted list of firing times.
    for i in range(len(fire_order)):
        # Check if the firing time is less than or equal to the index.
        if fire_order[i] <= i:
            # If so, return the current index, which represents the maximum number of planes that can be fired.
            return i
        
    # If all of the planes can be fired within their respective times, return the total number of planes.
    return len(fire_order)
