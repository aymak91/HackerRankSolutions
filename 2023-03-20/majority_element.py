def majorityElement(nums):
        vote = None
        num_votes = 0
        for num in nums:
            if vote == None:
                vote = num
            
            if vote == num:
                num_votes += 1
            else:
                num_votes -= 1
                
            if num_votes == 0:
                vote = None
                
        return vote