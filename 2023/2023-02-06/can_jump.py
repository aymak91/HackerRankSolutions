def can_jump(nums):
    dest = len(nums) - 1

    for i in range(dest-1, -1, -1):
        if nums[i] + i >= dest:
            dest = i

    return dest == 0