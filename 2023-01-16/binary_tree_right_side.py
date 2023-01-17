'''
This problem can be solved either with DFS or BFS
'''

# BFS solution
def BFS_right_side_view(root): # O(n) Time, O(n) space
        if not root:
            return root
        
        levels = [[root]]
        idx = 0

        for level in levels:
            idx += 1
            levels.append(list())
            for node in level:
                if node.left:
                    levels[idx].append(node.left)
                if node.right:
                    levels[idx].append(node.right)
            if len(levels[idx]) == 0:
                break
        levels.pop()
        ans = []
        for level in levels:
            ans.append(level[-1].val)
        return ans
    
# alt BFS solution
from collections import deque
def BFS2_right_side_view(root):
    if not root:
        return root
    
    queue = deque([(root, 0)])
    ans = []

    while queue:
        node, level = queue.popleft()
        
        if level == len(ans):
            ans.append(node.val)

        if node.right:
            queue.append((node.right, level+1))
        if node.left:
            queue.append((node.left, level+1))
            
    return ans



# DFS recursive Solution
def RDFS_right_side_view(root): # O(n) Time, O(n) space
        s = set()
        ans = []
        def right(level, node):
            if node:
                if level not in s:
                    s.add(level)
                    ans.append(node.val)
                right(level+1, node.right)
                right(level+1, node.left)
        
        right(0, root)
        return ans    
    
    
# DFS iterative solution
def IDFS_right_side_view(root): # O(n) Time, O(n) space
        seen = set()
        ans = list()
        stack = [(root, 0)]

        while stack:
            node, level = stack.pop()
            if not node:
                continue
                
            if level not in seen:
                ans.append(node.val)
                seen.add(level)

            if node.left:
                stack.append((node.left, level+1))
            if node.right:
                stack.append((node.right, level+1))

        return ans