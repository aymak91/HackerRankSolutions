
from heapq import heapppop, heappush

def last_stone(stones):
    heap = list()
    
    for stone in stones:
        heappush(heap, -stone)
    
    while len(stones) > 1:
        stone1 = heapppop(stones)
        stone2 = heapppop(stones)
    
        if stone1 != stone2:
            heappush(heap, -abs(stone1 - stone2))
            
    return 0 if not heap else abs(heap[0])
    
    