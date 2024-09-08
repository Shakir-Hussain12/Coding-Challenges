/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    
    let end = nums.length - 1;
    let currSum = 0;
    let res = 0;
    let minDist = 99999;
    let target = 2;

    for (let start = 0; start <= end; start += 1){
        let init = start + 1;
        let final = end
        while(init < final) {
            currSum = 0;
            currSum += nums[start]
            currSum += nums[init]
            currSum += nums[final]
            
            console.log(`currSum: ${currSum}`);
            if (minDist >= Math.abs(currSum - target)) {
                minDist = Math.abs(currSum - target);
                res = currSum;
            }

            if (currSum > target) {
                final -= 1;
            } else {
                init += 1;
            }
        }
    }

    console.log(res);
};

const nums = [1, 7, 0, -1]
threeSum(nums);