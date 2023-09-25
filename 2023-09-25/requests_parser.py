'''
First, the function initializes an empty list named results that will hold the final results for each request.
Then, for each request in the requests list, the function performs the following steps:

 * It splits the request into the request type and the URL using the split method and stores them in req_type
   and url variables respectively.

 * It extracts the authentication token from the URL using the get_parameter function and stores it in the
   auth_token variable.

 * It checks if the auth_token is in the list of valid_auth_tokens. If it is not, the function appends
 the string "INVALID" to the results list and moves on to the next request.

 * If the auth_token is valid, the function checks if the request type is "POST".
 If it is, the function extracts the CSRF token from the URL using the get_parameter function and stores it in the csrf_token variable.

 * It then checks if the csrf_token is an alphanumeric string of length at least 8. If it is not,
 the function appends the string "INVALID" to the results list and moves on to the next request.

 * If both the authentication token and the CSRF token are valid (in the case of a POST request),
 the function extracts the URL parameters using the get_params function and stores them in the params dictionary.

 * Finally, the function appends the string "VALID" to the results list followed by
 the comma-separated key-value pairs from the params dictionary.
 If the params dictionary is empty (i.e., there are no URL parameters),
 the function appends an empty string to the results list.

Once all the requests have been processed, the function returns the results list.
The get_parameter function takes in a URL string and a parameter name and returns the value of the parameter.
It does this by first finding the index of the parameter name using the find method and then extracting the value using slicing.
The get_params function takes in a URL string and returns a dictionary of URL parameters. It does this by first finding the index of the question mark (?) using the find method and then extracting the substring after the question mark using slicing. It then splits this substring into a list of key-value pairs using the split method and stores them in a dictionary.
'''

def getResponses(valid_auth_tokens, requests):
    # Convert the valid_auth_tokens list to a set for faster lookups
    valid_tokens_set = set(valid_auth_tokens)

    # Initialize an empty list to store the responses
    responses = []

    # Loop through each request and check if it's valid
    for request in requests:
        # Extract the HTTP method (GET or POST) and URL string from the request
        http_method, url = request[0], request[1]

        # Initialize the response to "VALID"
        response = "VALID"

        # Extract the token and CSRF value from the URL parameters
        token = ""
        csrf = ""
        url_parameters = url.split('?')[1].split('&')
        for parameter in url_parameters:
            key, value = parameter.split('=')
            if key == "token":
                token = value
                continue
            elif key == "csrf":
                csrf = value
                continue
            response += f",{key},{value}"  # Append the URL parameter to the response string

        # Check if the token is valid
        if token not in valid_tokens_set:
            response = "INVALID"

        # If the request is a POST request, check if the CSRF value is at least 8 characters long
        # and contains only lowercase letters and/or numbers
        if http_method == "POST":
            # likely solution
            if len(csrf) < 8 or not csrf.isalnum() or not csrf == csrf.lower():
            # alternative regex 
            # if not re.match('^([a-zA-Z0-9]){8,}$',csrf):
                response = "INVALID"
            

        # Append the response ("VALID" or "INVALID") to the list of responses
        responses.append(response)

    # Return the list of responses
    return responses