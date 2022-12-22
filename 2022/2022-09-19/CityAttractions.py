# You have just arrived in a new city and would like to see its sights. Each sight is located in a square and you have assigned each a beauty value. Each road to a square takes an amount of time to travel, and you have limited time for sightseeing. Determine the maximum value of beauty that you can visit during your time in the city. Start and finish at your hotel, the location of sight zero.

 
# Example

# n = 4

# m = 3

# max_t = 50

# beauty = [5, 10, 15, 20]

# u = [0, 1, 0]

# v = [1, 2, 3]

# t = [10, 10, 10]

 

# n = 4 squares are chosen in the map, including the hotel at square 0.
# m = 3 bidirectional roads that connect them
# Edges are between squares u[i] and v[i], and t = [i] is the time to travel edge i.
# beauty = [5, 10, 15, 20]  represents the beauty values for squares 0, 1, 2, and 3 respectively.
# To visit Square 0, 1 and 2 (Starting at the hotel and ending at the hotel), it takes 10 + 10 + 10 + 10 = 40 minutes and it has 5 + 10 + 15 = 30 beauty value (the beauty value is counted only on your first visit.)
# To do a round trip from square 0 to square 3, it takes 10 + 10 =20 minutes and it has only 5 + 20 = 25 beauty value.
# The path that gathers squares with the maximum value of beauty that you can visit during max_t = 50 minutes or less, is squares = [0, 1, 2] with 30 as a beauty value.
 

 



 

# Function Description 

# Complete the function findBestPath in the editor below.

 

# findBestPath has the following parameter(s):

# int n: an integer, the number of sights in the city

# int m: an integer, the number of connecting roads

# int max_t: an integer, the amount of time for sightseeing

# int beauty[n]: integer array, the beauty values you have assigned to each sight

# int u[m]: integer array, the starting sight location for each bidirectional road

# int v[m]: integer array, the ending sight location for each bidirectional road

# int t[m]: integer array, the travel time for each bidirectional road

# Returns:

# int: an integer, the maximum sum of beauty values of squares you will visit.

 

# Constraints

# 1 ≤ n ≤ 1000
# 1 ≤ m ≤ 2000
# 10 ≤ max_t ≤ 100
# 0 ≤ u[i], v[i] ≤ n - 1
# u[i] ≠ v[i]
# 10 ≤ t[i] ≤ 100
# 0 ≤ beauty[i] ≤ 108
# No more than 4 roads connect a single square with others.
# Two squares can be connected by at most one road.


#
# Complete the 'findBestPath' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER m
#  3. INTEGER max_t
#  4. INTEGER_ARRAY beauty
#  5. INTEGER_ARRAY u
#  6. INTEGER_ARRAY v
#  7. INTEGER_ARRAY t
#
from collections import defaultdict
def findBestPath(n, m, max_t, beauty, u, v, t):
    def prepare_graph():
        graph = defaultdict(list)
        for i in range(len(u)):
            graph[u[i]].append([v[i], t[i]])
            graph[v[i]].append([u[i], t[i]])
        return graph

    def dfs_helper(node, curr_val, curr_time, visited):
        if curr_time > max_t:
            return

        if node == 0:
            max_beaty[0] = max(max_beaty[0], curr_val)

        for nei in graph[node]:
            new_node, new_node_time = nei[0], nei[1]

            new_node_val = beauty[new_node]

            if new_node in visited:
                new_node_val = 0

            dfs_helper(new_node, curr_val + new_node_val, curr_time + new_node_time, visited | set([new_node]))

    max_beaty = [float('-inf')]
    graph = prepare_graph()

    dfs_helper(0, beauty[0], 0, set([0]))

    return max_beaty[0]