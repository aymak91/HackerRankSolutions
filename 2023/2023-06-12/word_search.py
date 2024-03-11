



def exist(board: list, word: str) -> bool:
    # Helper function to search for the word starting from a given position
    def search_here(pos: tuple, idx: int, seen: set) -> bool:
        # Base case: If all characters of the word have been found, return True
        if idx >= len(word):
            return True
        
        # List to store the results of recursive calls in different directions
        directions = list()

        # Iterate over the four possible directions: up, down, left, and right
        for row, col in {(1, 0), (-1, 0), (0, 1), (0, -1)}:
            r, c = row+pos[0], col+pos[1]

            # Skip positions outside the board boundaries
            if not 0 <= r < len(board) or not 0 <= c < len(board[0]):
                continue
            
            # Skip positions that have already been visited in the current search path
            if (r, c) in seen:
                continue

            # If the character at the new position matches the character being searched,
            # mark the position as visited, make a recursive call, and store the result
            if board[r][c] == word[idx]:
                seen.add((r, c))
                directions.append(search_here((r, c), idx+1, seen))
                seen.remove((r, c))

        # If any of the recursive calls in different directions is successful, return True
        return any(directions)


    # Iterate over each position in the board
    for row in range(len(board)):
        for col in range(len(board[row])):
            # If the character at the current position matches the first character of the word,
            # mark the position as visited, make a recursive call, and check if it returns True
            if board[row][col] == word[0]:
                seen = {(row, col)}
                if search_here((row, col), 1, seen):
                    return True

    # If no position results in a successful search, return False
    return False
