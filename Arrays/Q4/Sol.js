/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let end = nums.length - 1;
    let currArr = {};
    let currSum = 0;

    nums.sort((a,b) => a - b);

    for (let start = 0; start <= end; start += 1){
        let init = start + 1;
        let final = end
        while(init <= final) {
            currSum = 0;
            currSum += nums[start]
            currSum += nums[init]
            currSum += nums[final]
            if(currSum === 0) {
                let addArr = [nums[start], nums[init], nums[final]];
                let index = addArr.join('');
                currArr[index] = addArr;
            }

            if (currSum > 0) {
                final -= 1;
            } else {
                init += 1;
            }
        }
    }
    
    key = Object.keys(currArr);
    let resArr = [];
    key.map((item) => resArr.push(currArr[item]));
    console.log(resArr);
};

const nums = [1,1,1]
threeSum(nums);