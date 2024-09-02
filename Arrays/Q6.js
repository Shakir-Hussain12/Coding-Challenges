// Question
// most consecutive ones in an array of 0s and 1s with at most 2 zero flips.

const arr = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1];

let start = 0;
let end = 0;
let zeroCount = 0;
let maxLen = -1;
const len = arr.length;
 
while(end < len) {
    if(arr[end] === 0) zeroCount++;

    if (zeroCount > 2) {  
        start++;
        if (arr[start - 1] === 0) zeroCount--;
    }

    if (zeroCount <= 2 && end - start > maxLen) { 
        maxLen = end - start + 1;       
    }
    
    end++;
}

console.log(maxLen);