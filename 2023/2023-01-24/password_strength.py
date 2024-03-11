def basic_check(password: str) -> bool:
    if len(password) < 6:
        return True
    if password.isupper() or password.islower():
        return True
    if password.isdigit():
        return True
    
    return False

def getPasswordStrength(passwords, common_words):
    res = []
    common_words = set(common_words)
    
    for password in passwords:
        if basic_check(password) or any(sub in password for sub in common_words):
            res.append('weak')
        else:    
            res.append('strong')
        
    return res