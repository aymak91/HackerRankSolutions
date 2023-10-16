
def valid_move(pos:tuple) -> bool:
    x, y = pos
    # Check if x is within the bounds of the matrix.
    if not 0 <= x <= 3:
        return False
    
    # Check if y is within the bounds of the matrix.
    if not 0 <= y <= 3:
        return False
    
    return True


def maxEnergy(mat):
    cost = []
    
    def search(pos:tuple, seen:set, mc:int) -> None:
        # If we have reached the last row, append the cost to the list of costs and stop our search.
        if pos[0] == 3:
            cost.append(mc)
            return
            
        
        for move in [(1, -1), (1, 0), (1, 1)]:
            new_r, new_c = move[0]+pos[0], move[1]+pos[1]
            # If the move is not valid or has already been seen, skip it.
            if not valid_move((new_r, new_c)) or (new_r, new_c) in seen:
                continue

            # Add the new position to the set of seen positions.
            seen.add((new_r, new_c))
            # Recursively search from the new position with the updated cost.
            search((new_r, new_c), seen, mc-mat[new_r][new_c])
            # Remove the new position from the set of seen positions.
            seen.remove((new_r, new_c))
    
    # Search for the maximum energy that can be obtained from each possible starting position.
    for i in range(4):
        # Start the search from the current position with the initial cost.
        search((0, i), {(0, i)}, 100 - mat[0][i])
    
    
    return max(cost) 