def maxDifference(px):
    minSoFar = float('inf') 
    ans = -1
    
    for price in px:
        if price > minSoFar:
            ans = max(ans, price - minSoFar)
        minSoFar = min(minSoFar, price)
        
    return ans