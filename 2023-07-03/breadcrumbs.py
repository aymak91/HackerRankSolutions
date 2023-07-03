import re

def title_my_ele(ele_name: str) -> str:
    # helpper function to parse the tag name for us
    
    # if we're under 31 length we can just swap the dashes with spaces and uppercase it, then send it back
    if len(ele_name) <= 30:
        return ele_name.replace('-', ' ').upper()
    
    # set up our excluded words and the var we will be returning
    exclude = {"the","of","in","from","by","with","and", "or", "for", "to", "at", "a"}
    res = list()
    
    # split the word(s) by dashes then loop
    for word in ele_name.split('-'):
        if word not in exclude:
            res.append(word[0].upper())
            
    return ''.join(res)

def generate_bc(url, separator):
    # Tags to hold our tags till we're ready to join them, and standing path for the growing path
    tags = ['<a href="/">HOME</a>']
    standing_path = list()
    
    # Here's our regex, prob my most complex regex to date (so it prob sucks lol)
    # There should never be a case that it can't find a match, so if it does we throw an error
    match = re.match(r'^(http[s]?://)?(www.)?[\w\.-]+\/?(?P<path>[\w\/-]+)?', url)
    if not match:
        raise Exception(f'REGEX ERROR: failed to match - {url}')
    
    # edge case for when the url is just the home page
    if not match.group('path'):
        return r'<span class="active">HOME</span>'
    
    # we'll then separate our url path if it ends with an index we'll just pop it off
    paths = match.group('path').split("/")
    if paths[-1] == 'index':
        paths.pop()
        
    # edge case for when that index was the only path in our paths list
    if not paths:
        return r'<span class="active">HOME</span>'
        
    # looping over the paths, idx is keep just to know when we get to the last one
    for idx, path in enumerate(paths):
        # grow the standing path
        standing_path.append(path)
        # use our helper function to parse the name for the element
        ele_name = title_my_ele(path)

        # if this isn't the last item in paths we use the a tag otherwise we use the span tag
        if idx != len(paths)-1:
            tags.append(
                f'<a href="/{"/".join(standing_path)}/">{ele_name}</a>'
            )
        else:
            tags.append(
                f'<span class="active">{ele_name}</span>'
            )

    # after the loop ends join them on the given separator
    return separator.join(tags)