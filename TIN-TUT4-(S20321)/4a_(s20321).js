// ITERATIVE
function iteration(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}
console.log(iteration(3))

// RECURSION
let recursive = function (N) {

    if (N === 0) {
        return 1;
    }
    return N * recursive(N - 1);
};
console.log(recursive(3))