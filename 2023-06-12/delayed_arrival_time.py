



def findDelayedArrivalTime(arrivalTime: int, delayedTime: int) -> int:
    # Calculate the delayed arrival time by adding the arrival time and the delayed time
    delayed_arrival_time = arrivalTime + delayedTime
    
    # Take the modulus 24 to ensure the result is within the range of 0 to 23 (representing the 24 hours of a day)
    delayed_arrival_time = delayed_arrival_time % 24
    
    # Return the delayed arrival time
    return delayed_arrival_time
