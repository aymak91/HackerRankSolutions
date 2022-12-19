



def getUmbrellas(rq: int, sizes: list) -> int:
    table = [float('inf')] * (rq + 1)
    table[0] = 0
    
    for i in range(1, rq+1):
        for j in sizes:
            if i >= j:
                table[i] = min(table[i], table[i-j]+1)
    
    if table[rq] == float('inf'):
        return -1
    
    return table[rq]
  
    
    
print(getUmbrellas(15, [3, 5]), 'should equal 1')
# print(getUmbrellas(5, [3, 5]), 'should equal 1')
# print(getUmbrellas(8, [3, 5]), 'should equal 2')
# print(getUmbrellas(7, [3, 5]), 'should equal -1')
# print(getUmbrellas(10, [2, 6, 5]), 'should equal 2')
# print(getUmbrellas(10, [4, 1, 3]), 'should equal 3')