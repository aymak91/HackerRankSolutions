#
# Complete the 'findLongestSingleSlot' function below.
#
# The function is expected to return a CHARACTER.
# The function accepts 2D_INTEGER_ARRAY leaveTimes as parameter.
#

from string import ascii_lowercase as letters

def findLongestSingleSlot(leaveTimes: list[list[int]]) -> int:
    curr_time = 0
    head_nurse = [None, 0]
    
    for nurse, clockout_time in leaveTimes:
        shift_time = clockout_time - curr_time
        
        if shift_time > head_nurse[1]:
            head_nurse = [nurse, shift_time]
            
        curr_time = clockout_time
        
    return letters[head_nurse[0]]
    

     
print(findLongestSingleSlot([[0, 3], [2, 5], [0, 9], [1, 15]]), 'should equal b')
print(findLongestSingleSlot([[0, 2], [1, 3], [0, 7]]), 'should equal a')
print(findLongestSingleSlot([[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]]), 'should equal e')