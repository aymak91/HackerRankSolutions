from heapq import heappush, heappop
def findRelativeRanks(score):
    heap = list()
    ranks = {
        1: 'Gold Medal',
        2: 'Silver Medal',
        3: 'Bronze Medal'
    }
    rank = 1

    for idx, num in enumerate(score):
        heappush(heap, (-num, idx))

    for _ in range(len(score)):
        num, idx = heappop(heap)
        if rank in ranks:
            score[idx] = ranks[rank]
        else:
            score[idx] = str(rank)
        rank += 1

    return score