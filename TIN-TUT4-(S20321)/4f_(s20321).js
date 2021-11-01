function isPrimeOrIsOdd(n) {
    if (n === 1) {
        return "Odd";
    } else if (n === 2) {
        return "Prime";
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return "Odd";
            }
        }
        return "Prime";
    }
}

console.log(isPrimeOrIsOdd(9))
console.log(isPrimeOrIsOdd(2))