def isPossible(a, b, c, d):
    stack = [(a, b)]
    
    while stack:
        na, nb = stack.pop()
        if (na, nb) == (c, d):
            return 'Yes'
        
        if na > c or nb > d:
            continue
        stack.append( (na+nb, nb) )
        stack.append( (na, na+nb) )
            
    return 'No'