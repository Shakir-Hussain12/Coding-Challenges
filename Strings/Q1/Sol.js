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
            if (hash[s[index]] < 2 && maxlen < index - i + 1) {
                maxlen = Math.max(maxlen, index - i + 1);
                // console.log(s.slice(i, index + 1))
            }

            if (hash[s[index]] >= 2) {
                hash[s[i]] -= 1;
                i++;
            }

            index++
        }
    }
}

console.log(maxlen)