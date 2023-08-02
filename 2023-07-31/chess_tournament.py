def getPotentialOfWinner(potential, k):
    # Initialize a variable to keep track of the number of consecutive rounds won by the current winner
    rounds_won = 0

    # Set the initial winner as the first player in the 'potential' list
    curr_winner = potential[0]

    # Iterate over the 'potential' list starting from the second player (index 1)
    for i in range(1, len(potential)):
        # Get the potential of the current player
        player = potential[i]

        # Check if the current player's potential is greater than the current winner's potential
        if player > curr_winner:
            # If the current player has greater potential, reset the count of consecutive rounds won
            rounds_won = 0

            # Update the current winner to the current player
            curr_winner = player

        # Increment the count of consecutive rounds won by the current winner
        rounds_won += 1

        # Check if the current winner has won 'k' consecutive rounds
        if rounds_won == k:
            # If the current winner has won 'k' consecutive rounds, stop the loop and return the current winner's potential
            break

    # Return the potential of the winner who won 'k' consecutive rounds
    return curr_winner
