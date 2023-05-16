def maxArea(height):
    # Initialize the maximum water variable to negative infinity, this ensures every other value is larger than it
    max_water = float('-inf')
    
    # Initialize the left and right pointers to the first and last indices of the height list
    left, right = 0, len(height)-1
    
    # Iterate in reverse order effectively giving us the "width" between the two pointers
    for width in range(len(height)-1, 0, -1):
        
        # Determine the shortest wall
        if height[left] < height[right]:
            
            # The height of the wall at the left pointer becomes the shortest wall
            shortest_wall = height[left]
            
            # Increment the left pointer by 1
            left += 1
        else:
            # The height of the wall at the right pointer becomes the shortest wall
            shortest_wall = height[right]
            # Decrement the right pointer by 1
            right -= 1
        
        # Calculate the current water area by multiplying the shortest wall height with the distance between the two pointers
        current_area = shortest_wall * width
        
        # Update the max_water variable by taking the maximum value between the current max_water and the calculated water area
        max_water = max(max_water, current_area)
    
    # Return the maximum amount of water that can be contained
    return max_water  
