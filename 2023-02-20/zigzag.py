def convert(s: str, numRows: int) -> str:
        rows = [''] * numRows
        step = 1
        pointer = 0
        
        for char in s:
            rows[pointer] += char
            
            if pointer == len(rows)-1:
                step = -1
            elif pointer <= 0:
                step = 1
            
                
            pointer += step
        
        return ''.join(rows)