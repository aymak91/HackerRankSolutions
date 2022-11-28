from heapq import heapify, heappop, heappush

def findMinimumPrice(price, m):
    price = [-x for x in price]
    heapify(price)
    
    for coop in range(m):
        item = abs(heappop(price))
        item //= 2
        if item > 0:
            heappush(price, -item)
        if len(price) == 0:
            break
            
    return abs(sum(price))