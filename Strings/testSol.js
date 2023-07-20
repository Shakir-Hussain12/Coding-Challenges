let str1 = 'abcmnopqrstdefghijkluvwxyzabcdefghi';
let str2 = 'abcdefghi'

let start = 0;
maxlen = -99999;
let index = 0; 

for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] === str2[0]) {
        let resStr = ''
        resStr += str1[i];
        start = i + 1;

        while (str1[start] != str2[0] && str1[start] != str2[str2.length - 1] && start < str1.length) {
            resStr += str1[start];
            start += 1;
        }

        resStr += str1[start];
        if (maxlen < (start - i)) {
            maxlen = start - i;
            console.log(resStr);
        }
        i = start;
    }
}