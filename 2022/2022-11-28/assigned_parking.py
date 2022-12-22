#
# Complete the 'minFuel' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY x
#  2. INTEGER_ARRAY y
#


def minFuel(x, y):

    n = len(x)
    x.sort()
    for i in range(n):
        x[i] -= i
    y.sort()
    x.sort()
    
    fuel = 0
    for i in range(n):
        fuel += abs(y[i] - y[n//2])
        fuel += abs(x[i] - x[n//2])

    return fuel
    
print(minFuel([1, 1, 3], [1, 4, 3]), 'should equal 4')
print(minFuel([1, 4], [1, 4]), 'should equal 5')
print(minFuel([1, 5], [1, 5]), 'should equal 7')