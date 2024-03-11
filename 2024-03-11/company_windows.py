def maxEvents(arrival, duration):
    # create an array of tuples (start_time, end_time) where end time = arrival + duration
    start_end = [(a, a+d) for a, d in zip(arrival, duration)]
    # sort by end time (greedily choose earliest end time)
    start_end.sort(key = lambda x: x[1])
    # ends is set to earliest ending of any event
    count, ends = 1, start_end[0][1]
    n = len(start_end)
    for i in range(n):
        # if the next start time is open, include the event
        if start_end[i][0] >= ends:
            count += 1
            ends = start_end[i][1]
    return count