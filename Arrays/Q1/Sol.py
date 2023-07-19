def twoSum(self, nums, target):
    check = []
    for i in range(len(nums)):
        check.append(target - nums[i])

    for i in range(len(check)):
        if check[i] in nums and nums.index(check[i]) != i:
            return [i,nums.index(check[i])]
            