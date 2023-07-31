import re
from collections import defaultdict as ddict

filename = input()
timestamps = ddict(int)

with open(filename, 'r') as f:
    for line in f.readlines():
        match = re.search(r'\[([\d\/\w:]*)', line)
        if match:
            timestamps[match.group(1)] += 1
    
with open('req_'+filename, 'w') as f:
    for k, v in timestamps.items():
        if v > 1:
            f.write(k)
            f.write('\n')