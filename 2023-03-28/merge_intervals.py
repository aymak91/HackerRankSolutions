def merge_intervals(intervals):# time(n log n) space(n)
    intervals.sort(reverse=True)
    answer = []

    while len(intervals) > 1:
        if intervals[-1][1] >= intervals[-2][0]:
            intervals[-2][0] = min(intervals[-1][0], intervals[-2][0])
            intervals[-2][1] = max(intervals[-1][1], intervals[-2][1])
            intervals.pop()
        else:
            answer.append(intervals.pop())

    return answer + intervals