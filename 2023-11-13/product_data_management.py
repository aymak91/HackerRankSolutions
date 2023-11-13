from collections import defaultdict as ddict

def getMatchingProducts(products, queries):
    # Create a dictionary where the keys are years and the values are lists of product names
    product_by_year = ddict(list)

    # Populate the dictionary with product data
    for name, price, year in products:
        product_by_year[year].append(name)
        
    # Initialize a list to store the results
    res = list()
    # Iterate over the queries
    for t, v in queries:
        # If the query type is 'Type1', append the list of products for the given year
        if t == 'Type1':
            res.append(product_by_year[v])
        # If the query type is 'Type2', append a list of products with a price less than the given value
        elif t == 'Type2':
            res.append([ product[0] for product in products if int(product[1]) < int(v) ])
        # If the query type is 'Type3', append a list of products with a price greater than the given value
        elif t == 'Type3':
            res.append([ product[0] for product in products if int(product[1]) > int(v) ])

    # Return the result list
    return res
