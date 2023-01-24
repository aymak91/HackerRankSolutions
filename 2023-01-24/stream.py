class OrderedStream:
    
    def __init__(self, n):
        self.stream = {k: False for k in range(1, n+1)}
        self.pos = 1
    
    def insert(self, id_key, value):
        self.stream[id_key] = value
        
        result = []
        while self.pos <= len(self.stream) and self.stream[self.pos]:
            result += [self.stream[self.pos]]
            self.pos += 1

        return result