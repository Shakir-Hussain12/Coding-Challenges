//Question
//Largest sum of 5 consecutive elements in a circular array

const arr = [9, 9, 1, 2, 3, 4, 5, 9, 9, 9]

let start = 0;
let currSum = 0; 
let largestSum = 0;
const k = 5;

while(start < k) {
    currSum += arr[start++];
} 
largestSum = currSum;

let end =  arr.length - 1
start--;

while (end > 4) {
    currSum += arr[end--];
    currSum -= arr[start--];

    if(start < 0) {
        start = arr.length - 1
    }

    if (currSum > largestSum) {
        // console.log(arr.slice(0, start + 1))
        // console.log(arr.slice(end + 1, arr.length))
        largestSum = currSum;
    }
}

console.log(largestSum)
