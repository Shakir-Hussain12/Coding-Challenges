// Given a string, return true if it is a bracket balancer. Otherwise return false.

const str = '(({[]})){}]';
let stack = [];
let last = '';

for (let i of str) {
    if (i === '(' || i === '{' || i === '[') stack.push(i);

    switch (i) {
        case ']':
            last = stack.pop();
            if (last !== '[') {
                console.log(false);
                return;
            }
            break;

        case '}':
            last = stack.pop();
            if (last !== '{') {
                console.log(false);
                return;
            }
            break;

        case ')':
            last = stack.pop();
            if (last !== '(') {
                console.log(false);
                return;
            }
            break;

        default: break;
    }

    if(stack.length === 0) {
        console.log(false);
        return;
    }

}
console.log("Balanced")

