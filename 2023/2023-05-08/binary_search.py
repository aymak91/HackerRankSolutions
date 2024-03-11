def search(nums, target):
    if len(nums) == 1 and nums[0] != target:
        return -1
    mid = len(nums) // 2


    if target == nums[mid]:
        return mid
    if target < nums[mid]:
        return search(nums[:mid], target)
    else:
        test_case = search(nums[mid:], target)
        if test_case != -1:
            return mid + search(nums[mid:], target)
        else:
            return -1