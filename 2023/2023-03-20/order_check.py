def countStudents(height):
    out_of_place = 0
    
    for i, j in zip(height, sorted(height)):
        if i != j:
            out_of_place += 1
            
    return out_of_place