# Non-heap solution

class KthLargest:
    def __init__(self, k, nums):
        # Initialize the instance variables
        self.nums = nums
        self.k = k

    def add(self, val) -> int:
        # Add the new value to the list
        self.nums.append(val)
        # Sort the list in ascending order
        self.nums.sort()
        # Return the kth largest element
        return self.nums[-self.k]
    
    
# Heap solution

from heapq import heappush, heappop, heapify

class KthLargest:
    def __init__(self, k, nums) -> None:
        # Initialize the heap with the given numbers
        self.heap = nums
        # Transform the list into a heap
        heapify(self.heap)
        self.k = k

        # If the initial list has more than k elements, remove the smallest elements
        while len(self.heap) > k:
            heappop(self.heap)

    def add(self, val):
        # Add the new value to the heap
        heappush(self.heap, val)

        # If the heap size exceeds k, remove the smallest element
        if len(self.heap) > self.k:
            heappop(self.heap)

        # Return the smallest element, which is the kth largest element in the stream
        return self.heap[0]
