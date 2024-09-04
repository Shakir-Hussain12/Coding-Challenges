const isPrime = (num) => {
  if (num < 4) {
    return true;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const n = 18;
const hash = {};
const res = [];

let j = 2;
while (j < n) {
  const comp = n - j;
  if (isPrime(j) && isPrime(comp)) {
    if (hash[comp] !== undefined) {
      res.push([j, comp].sort((a, b) => a - b));
    }
  }

  hash[j] = 1;
  j += 1;
}

console.log(res);
