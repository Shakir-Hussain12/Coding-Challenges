//Largest Subarray where sum is less than 15

const arr = [1, 2, 8, 3, 7, 8, 1, 1, 3, 4, 5]

let start = 0;
let end = 0;
let currSum = 0;
let largestLen = -1;
const len = arr.length;

while (end < len) { 
    currSum += arr[end]; 

    if (currSum >= 15 && end - start > largestLen) { 
        currSum -= arr[start]
        start++;
    }

    if (end - start > largestLen) { 
        largestLen = end - start 
    }

    end++;
}
 
console.log(++largestLen);