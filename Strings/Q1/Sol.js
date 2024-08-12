let s = "abcabcbb";
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

        while (index < s.length) {
            hash[s[index]] += 1;
            if (hash[s[index]] < 2) {
                maxlen = Math.max(maxlen, index - i + 1);
            } else {
                while(hash[s[index]] > 1) {
                    hash[s[i]] -= 1;
                    i += 1;
                }
            }
            index++
        }
    }
}

console.log(maxlen)