import heapq

def minimizeCost(arr):
    heapq.heapify(arr)
    running_cost = 0
    
    while len(arr) > 1:
        val1 = heapq.heappop(arr)
        val2 = heapq.heappop(arr)
        
        running_cost += val1+val2
        
        heapq.heappush(arr, val1+val2)
        
    return running_cost