// Remove Adjacent Duplicates in String. You are given a string s and an integer k. Write a function to remove k adjacent duplicates from s where the "adjacent" characters are equal.

// For instance, if k is 3 and the string is "daaabbbaa", since we have "aaa" and "bbb" as adjacent triples, the function should transform the string to "daa", removing the "bbb" first and then the remaining "aaa".

let iter = 0;
let len = s.length;
let res = '';

while(iter < len){
    if(s[iter] != s[iter + 1]) {
        res += s[iter];
        iter++;
    } else {
        let count = 1;
        let pos = iter + 1;
        let temp = s[iter];
        while(s[pos] == s[iter]){
            temp += s[pos]
            pos++;
            count++;
        }
        
        if(count < k) {
            res += temp;
        }

        iter = pos;
    }
}

return res;