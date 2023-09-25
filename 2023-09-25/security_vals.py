'''
it can be observed that the minimum possible sum of absolute difference can be achieved by rearranging
characters in ascending order of their security values, and in this rearrangement,
If we observe the absolute differences carefully, all the other security values cancel
each other out except the maximum and the minimum ones. We simply find the maximum security value and
the minimum security value and the difference is the answer.
'''

def getMinSum(security_values, msg):
    mx, mi = 0, float('inf')
    
    for c in msg:
        mx = max(mx, security_values[ord(c) - ord('a')])
        mi = min(mi, security_values[ord(c) - ord('a')])
        
    return mx - mi