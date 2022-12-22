



def mostBalancedPartition(parent, files_size):
    n = len(parent)
    root = 0
    # store arrays of children for each directory here
    g = [[] for i in range(n)]
    # accumulate/store sizes of subtrees from directory i here
    sz = [0] * n
    # sum of all directory sizes
    total = sum(files_size)
    
    # recursively calculate differences    
    def dfs(v):
        res = total
        sz[v] = files_size[v]
        # accumulate size of subtree for directory v
        for u in g[v]:
            res = min(res, dfs(u))
            sz[v] += sz[u]
        return min(res, abs(total - 2 * sz[v]))
    
    # assemble the graph as arrays of children for each directory    
    for i in range(n):
        if parent[i] == -1:
            root = i
        else:
            g[parent[i]] += [i]
    # and recursively search for smallest absolute difference
    return dfs(root)
    

print(mostBalancedPartition([ -1, 0, 1, 2 ], [ 1, 4, 3, 4 ]), 'should equal 2')
print(mostBalancedPartition([ -1, 0, 0, 0 ], [ 10, 11, 10, 10 ]), 'should equal 19')