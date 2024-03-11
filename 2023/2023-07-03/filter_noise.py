import re

def get_chunks(datastream):
    # create the list we will return
    res = list()
    
    # iter over all matches of our regex pattern in the string and add them to res
    for match in re.finditer(r'(\d\.{2})?\d{2}\.\d{2}\.\d{3}.\d{4}\.\d{2}(\.{2}\d)?', datastream):
        res.append(match.group(0))
        
    # return all matches
    return res