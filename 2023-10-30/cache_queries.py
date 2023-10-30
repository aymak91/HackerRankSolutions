from collections import defaultdict as ddict

def getQueryAnswers(cache_entries, queries):
    # Create a defaultdict of dictionaries to store cache entries
    ce = ddict(dict)
    
    # Populate the cache_entries dictionary
    for timestamp, key, value in cache_entries:
        ce[key][timestamp] = value
        
    # Initialize an empty list to store the query answers
    res = list()
        
    # Retrieve the values from the cache_entries dictionary based on the queries
    for key, timestamp in queries:
        res.append(ce[key][timestamp])
    
    # Return the list of query answers
    return res