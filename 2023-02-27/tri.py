def generate(numRows):
    tri = [[1], [1, 1]]
    if numRows <= 2:
        return tri[:numRows]

    for _ in range(numRows-2):
        row = [1]
        for idx in range(1, len(tri[-1])):
            row.append(tri[-1][idx-1] + tri[-1][idx])
        row.append(1)
        tri.append(row)

    return tri