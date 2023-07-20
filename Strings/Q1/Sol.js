let s = 'pwwkew';
let maxlen = -99999;
let i = 0;
let currLen = 0;
let hash = {};
let index = 0;

if (s.length < 1) {
    return 1
} else {
    {
        for (let i of s) {
            hash[i] = 0;
        }

        while  (index < s.length) {
            hash[s[index]] += 1;
            
            if (hash[s[index]] < 2) {
                hash[s[index]] += 1;
                index += 1;
                maxlen = Math.max(maxlen, index - i);
            } else {
                hash[s[index]] -= 1;
                i += 1;
                index += 1;
            }
        }
    }
}

console.log(maxlen)