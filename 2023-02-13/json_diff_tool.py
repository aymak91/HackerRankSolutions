import json
def getJSONDiff(json1, json2):
    json1 = json.loads(json1)
    json2 = json.loads(json2)
    ans = list()
    
    for k, v in json1.items():
        if k in json2 and v != json2[k]:
            ans.append(k)
            
    return sorted(ans)