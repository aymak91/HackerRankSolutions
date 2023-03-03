def closedPaths(number):
    paths = {'0', '4', '6', '8', '9'}
    ans = 0
    
    for num in str(number):
        if num in paths:
            ans += 1 if num != '8' else 2
            
    return ans,
        