def preprocessDate(dates):
    res = list()
    months = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08', 
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    }
    
    for date in dates:
        d, m, y = date.split()
        
        d = d[:-2]
        if len(d) == 1:
            d = '0' + d
            
            
        res.append(f'{y}-{months[m]}-{d}')
        
    return res