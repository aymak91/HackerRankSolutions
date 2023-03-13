class Node:
    def __init__(self, val, is_word=False):
        self.val = val
        self.children = dict()
        self.is_word = is_word

class Trie:
    def __init__(self):
        self.root = Node(None)
    
    def insert(self, word):
        node = self.root
        for letter in word:
            if letter not in node.children:
                node.children[letter] = Node(letter)
            node = node.children[letter]
            
        node.is_word = True
        
        return 'none'
    
    def search(self, word):
        node = self.root
        
        for letter in word:
            if letter not in node.children:
                return 'false'
            node = node.children[letter]
            
        return 'true' if node.is_word else 'false'
    
    def startswith(self, prefix):
        node = self.root
        
        for letter in prefix:
            if letter not in node.children:
                return 'false'
            node = node.children[letter]
        return 'true'

def main(commands):
    trie = Trie()
    outputs = list()
    cmds = {
        'insert': trie.insert,
        'search': trie.search,
        'startswith': trie.startswith
    }
    
    for command in commands:
        action, inpt = command.split(' ')
        
        outputs.append(cmds[action](inpt))
        
    return ';'.join(outputs)
    

