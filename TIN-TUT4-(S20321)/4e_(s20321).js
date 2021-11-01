function findLongest(str) {
    let array = str.split(" ");
    let max = 0;
    let longestword = "";
    for (let i = 0; i < array.length; i++) {
        if (array[max].length < array[i].length) {
            max = i;
            longestword = array[i];
        }
    }
    return longestword;
}

console.log(findLongest("Hello my name is Mehlika "))