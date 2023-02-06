def updateTimes(signalOne, signalTwo):

    n = min(len(signalOne), len(signalTwo))
    maxequal = float('-inf')
    ans = 0
    
    for i in range(n):
        num1, num2 = signalOne[i], signalTwo[i]
        
        if num1 == num2 and num1 > maxequal:
            ans += 1
            maxequal = num1
            
    return ans

print(updateTimes([1, 2, 3, 4, 5], [2, 3, 4]))