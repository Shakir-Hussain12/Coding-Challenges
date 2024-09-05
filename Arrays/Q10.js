//extracting factors till the smallest prime

const isPrime = (num) => {
    if (num < 4) {
        return true;
    }
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
        return false;
        }
        i += 1;
    }

    return true;
};

const findValidFactors = (num) => {
    let i = 2;
    let sum = 0;
    while( i <= num){
        while (num % i === 0) {
            sum += i;
            num /= i;
        }
        i++;
    }
    
    return sum
}

const smallestPrimeFactor = (num) => {
    if (isPrime(num)) return num;

    return smallestPrimeFactor(findValidFactors(num));
}

console.log(smallestPrimeFactor(126)); // 5