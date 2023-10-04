import heapq
from datetime import datetime


def str_to_date(s:str) -> datetime:
    d, m, y = s.split('-')
    return datetime(day=int(d), month=int(m), year=int(y))

def date_to_str(date:datetime) -> str:
    d, m, y = date.day, date.month, date.year
    d = str(d) if d > 9 else f'0{d}'
    m = str(m) if m > 9 else f'0{m}'
    return f'{d}-{m}-{y}'

def extractErrorLogs(logs):
    heap = list()
    
    for idx, log in enumerate(logs):
        if log[2] in {'ERROR', 'CRITICAL'}:
            heapq.heappush(heap, (str_to_date(log[0]), log[1], idx, log[2], log[3]))
            
    res = list()
    
    while heap:
        log = heapq.heappop(heap)
        log = list(log)
        log.pop(2)
        
        log[0] = date_to_str(log[0])
        
        res.append(log)

    return res