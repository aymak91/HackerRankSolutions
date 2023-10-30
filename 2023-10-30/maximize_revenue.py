import heapq

def getMaximumAmount(quantity, m):
    # Create a heap to store the quantities in descending order
    heap = list()
    res = 0
    
    # Push the quantities onto the heap with their corresponding indices
    for idx, q in enumerate(quantity):
        # since heapq is a min heap we make the values negative so it will still give us the "biggest" int
        # we're tricking it into behaving like a max heap since thats what we need
        heapq.heappush(heap, (-q, idx))
    
    # Pop the m largest quantities from the heap and update the result
    for _ in range(m):
        q, idx = heapq.heappop(heap)
        # since q is negative we need to turn it into a positive value
        res += abs(q)
        
        # If the quantity is not zero, push it back onto the heap with an incremented value
        # since q should always be negative, we add to it to get it towards zero
        if q + 1 != 0:
            heapq.heappush(heap, (q+1, idx))
            
    return res
