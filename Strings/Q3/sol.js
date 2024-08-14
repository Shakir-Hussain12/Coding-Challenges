// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

let s = 'PAYPALISHIRING'
let numRows = 3;

let matrix = new Array(numRows).fill('').map(() => new Array().fill(''))
let index = 0;
let i = 0;
let item = 0;
let mainIndex = 0;
let len = s.length

while(item <= len) {
    matrix[mainIndex][index] = s[item]
    mainIndex++;
    item++;
    i++;

    if (i === numRows) {
        i-=2;
        index++;
        
        while(i > 0) {
            matrix[i][index] = s[item]
            i--; 
            index++;
            item++;
        }

        mainIndex = 0;
        i = 0;
    }
}

let res = ''
for ( i of matrix) {
    res += i.join('')
}

console.log(res)