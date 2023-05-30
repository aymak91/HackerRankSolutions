class Max_Heap:

    def __init__(self) -> None:
        self.items = []

        # helper methods
        #   methods for getting child(s)/parent idxs
        self.get_left_child_idx = lambda idx: 2 * idx + 1
        self.get_right_child_idx = lambda idx: 2 * idx + 2
        self.get_parent_idx = lambda idx:(idx - 1) // 2

        #   methods for checking if child(s) or parent exist
        self.has_left_child = lambda idx: self.get_left_child_idx(idx) < len(self.items)
        self.has_right_child = lambda idx: self.get_right_child_idx(idx) < len(self.items)
        self.has_parent = lambda idx: self.get_parent_idx(idx) >= 0

        #   methods for getting child(s)/parent vals
        self.left_child = lambda idx: self.items[self.get_left_child_idx(idx)]
        self.right_child = lambda idx: self.items[self.get_right_child_idx(idx)]
        self.parent = lambda idx: self.items[self.get_parent_idx(idx)]

    # helper Medthod for swapping
    def swap(self, idx1, idx2) -> None:
        self.items[idx1], self.items[idx2] = self.items[idx2], self.items[idx1]

    # heapify up for pushing
    def heapify_up(self) -> None:
        idx = len(self.items)-1
        while self.has_parent(idx) and self.items[idx] > self.parent(idx):
            self.swap(idx, self.get_parent_idx(idx))
            idx = self.get_parent_idx(idx)

    # heapify down for popping
    def heapify_down(self) -> None:
        idx = 0
        while self.has_left_child(idx):
            larger_child = self.get_left_child_idx(idx)
            if self.has_right_child(idx) and self.left_child(idx) < self.right_child(idx):
                larger_child = self.get_right_child_idx(idx)

            if self.items[idx] > self.items[larger_child]:
                break
            else:
                self.swap(idx, larger_child)

            idx = larger_child

    # pop from heap
    def pop(self) -> int:
        if not self.items:
            return []
        if len(self.items) <= 1:
            return self.items.pop()

        item = self.items[0]
        self.items[0] = self.items.pop()
        self.heapify_down()
        return item

    # push onto heap
    def push(self, item) -> None:
        self.items.append(item)
        self.heapify_up()