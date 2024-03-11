from heapq import heappush, heappop

def findRelativeRanks(score):
    # Create an empty heap
    heap = list()

    # Define ranks for medals
    ranks = {
        1: 'Gold Medal',
        2: 'Silver Medal',
        3: 'Bronze Medal'
    }

    # Initialize the current rank
    rank = 1

    # Push scores onto the heap, storing them as tuples (-num, idx)
    for idx, num in enumerate(score):
        heappush(heap, (-num, idx))

    # Assign ranks to the scores
    for _ in range(len(score)):
        # Pop the score with the highest value from the heap
        num, idx = heappop(heap)

        # Check if the rank corresponds to a medal
        score[idx] = ranks.get(rank, str(rank))

        # Increment the rank for the next iteration
        rank += 1

    # Return the modified score list
    return score