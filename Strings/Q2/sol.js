const s = "babad";

const checkPalindrome = (start, end) => {
    const len = s.length;

    if (len == 1) {
        return s[0]
    }

    while (start <= end) {
        if(s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

let init = 0;
let maxlen = 0;
let hash = {};

while(init < len) {
    hash[1] = s[init]
    let final = init + 1;
    if(maxlen < len - init) {
        while(final < len) {
            if(checkPalindrome(init, final)) {
                maxlen = Math.max(maxlen, (final - init + 1));
                if (hash[maxlen] === undefined) {
                    hash[maxlen] = s.substring(init, final + 1);
                }
            }
            final++;
        }
    } else {
        break;
    }
    init++;
}

const keys = Object.keys(hash);
console.log(hash[keys[keys.length -1]]);