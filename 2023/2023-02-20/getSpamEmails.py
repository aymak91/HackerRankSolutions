def getSpamEmails(subjects, spam_words):
    spam_words = set(word.lower() for word in spam_words)
    ans = list()
    
    for email in subjects:
        count = sum(word.lower() in spam_words for word in email.split())            
        
        ans.append('spam' if count >= 2 else 'not_spam')
            
    return ans



# two line solution if your feeling crazy
def getSpamEmails(subjects, spam_words):
    spam_words_lower = {word.lower() for word in spam_words}
    return ['spam' if sum(word.lower() in spam_words_lower for word in email.split()) >= 2 else 'not_spam' for email in subjects]