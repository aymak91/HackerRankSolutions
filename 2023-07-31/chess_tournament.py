def getPotentialOfWinner(potential, k):
    rounds_won = 0
    curr_winner = potential[0]

    for i in range(1, len(potential)):
        player = potential[i]
        if player > curr_winner:
            rounds_won = 0
            curr_winner = player
        
        rounds_won += 1
        if rounds_won == k:
            break

    return curr_winner