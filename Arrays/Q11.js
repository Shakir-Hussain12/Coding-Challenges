// Move all zeros to the end of an array while maintaining the order of the other elements. Given an array of integers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let iter = 0;
let len = arr.length;
let flag = 0;

while(iter < len) {
    if(arr[iter] == 0) {
        flag = 1;
        let pos = iter;
        while(pos < len) {
            if(arr[pos] != 0) {
                [arr[iter], arr[pos]] = [arr[pos], arr[iter]]
                flag = 0;
                break;
            }
            pos++;
        }
        
        if(flag) break;
    }
    iter++;
}

return arr;