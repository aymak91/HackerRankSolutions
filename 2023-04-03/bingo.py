def getBingoNumber(mat, arr):
    board_pos = dict()
    cols = { i: len(mat) for i in range(len(mat[0])) }
    rows = { i: len(mat[0]) for i in range(len(mat)) }
        
    for i in range(len(mat)):
        for j in range(len(mat[0])):
            board_pos[mat[i][j]] = (i, j)
            
    for i in arr:
        r, c = board_pos[i]
        cols[c] -= 1
        rows[r] -= 1
        
        if cols[c] == 0 or rows[r] == 0:
            return i