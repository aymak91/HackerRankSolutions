from collections import defaultdict as ddict
from heapq import heappush, heappop

def getMaxFun(singer, length):
    songs = ddict(list)
    res = 0
    total = 0
    shortest_songs = []
    
    for s, l in zip(singer, length):
        heappush(songs[s], l)
        
    for s in songs:
        heappush(shortest_songs, heappop(songs[s]))
        
    while shortest_songs:
        total += 1
        res += total * heappop(shortest_songs)
        
    for s in songs:
        while songs[s]:
            res += total * heappop(songs[s])
    
    return res