def maxArea(height):
    max_water = float('-inf')
    left, right = 0, len(height)-1
    for i in range(len(height)-1, 0, -1):
        if height[left] < height[right]:
            shortest_wall = height[left]
            left += 1
        else:
            shortest_wall = height[right]
            right -= 1
        max_water = max(max_water, shortest_wall * i)
    return max_water