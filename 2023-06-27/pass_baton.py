def batonPass(friends: int, time: int) -> list:
    # Calculate the number of complete rounds of passing the baton
    passes = time // (friends - 1)

    # Calculate the remaining time after completing full rounds
    remainder = time % (friends - 1)
    
    # Check if the number of passes is even
    if passes % 2 == 0:
        # Check if there is no remaining time
        if remainder == 0:
            # Return [2, 1] if even passes and no remainder
            return [2, 1]
        # Return [remainder, remainder+1] if even passes with remainder
        return [remainder, remainder+1]
    
    # The number of passes is odd
    else:
        # Check if there is no remaining time
        if remainder == 0:
            # Return [friends-1, friends] if odd passes and no remainder
            return [friends-1, friends]
        # Return [friends-remainder+1, friends-remainder] if odd passes with remainder
        return [friends-remainder+1, friends-remainder]
