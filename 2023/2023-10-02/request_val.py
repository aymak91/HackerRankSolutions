import heapq
from datetime import datetime

# Function to convert a date string to a datetime object
def str_to_date(s:str) -> datetime:
    d, m, y = s.split('-')
    return datetime(day=int(d), month=int(m), year=int(y))

# Function to convert a datetime object to a date string
def date_to_str(date:datetime) -> str:
    d, m, y = date.day, date.month, date.year
    d = str(d) if d > 9 else f'0{d}' # Add leading zero if day is single-digit
    m = str(m) if m > 9 else f'0{m}' # Add leading zero if month is single-digit
    return f'{d}-{m}-{y}'

# Function to extract error and critical logs from a list of logs
def extractErrorLogs(logs):
    heap = list()
    
    for idx, log in enumerate(logs):
        if log[2] in {'ERROR', 'CRITICAL'}: # Check if log level is 'ERROR' or 'CRITICAL'
            heapq.heappush(heap, (str_to_date(log[0]), log[1], idx, log[2], log[3])) # Push to heap with date as key
            
    res = list()
    
    while heap:
        log = heapq.heappop(heap)
        log = list(log)
        log.pop(2) # Remove index value
        
        log[0] = date_to_str(log[0]) # Convert date to string format
        
        res.append(log)

    return res
