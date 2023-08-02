import re
from collections import defaultdict as ddict

# Get the filename as input from the user
filename = input()

# Create a defaultdict to store timestamps as keys and their occurrence counts as values
timestamps = ddict(int)

# Read the input file and populate the 'timestamps' dictionary
with open(filename, 'r') as f:
    # Read each line in the file
    for line in f.readlines():
        # Use regular expression to search for timestamps in the format [YYYY/MM/DD:HH:mm:ss]
        match = re.search(r'\[([\d\/\w:]*)', line)
        if match:
            # If a timestamp is found in the line, increment its occurrence count in the 'timestamps' dictionary
            timestamps[match.group(1)] += 1

# Create a new file with 'req_' prefix and append the timestamps with occurrence count greater than 1
with open('req_'+filename, 'w') as f:
    for k, v in timestamps.items():
        # Check if the occurrence count (v) of the timestamp is greater than 1
        if v > 1:
            # If the timestamp occurred more than once, write it to the new file followed by a new line
            f.write(k)
            f.write('\n')
