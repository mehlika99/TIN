const binarySearch = (array, value) => {

    array.sort((a, b) => a - b);
    let first = 0;
    let last = array.length - 1;
    while(first <= last) {
      let middle = Math.floor((first + last) / 2);

       if(value < array[middle]) {
        //left
        last = middle - 1;
      }
       if(value > array[middle]) {
        //ride
        first = middle + 1;
      }
      
      if(value === array[middle]) {
        return console.log(middle);
      }
    }   
  }
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8 ,9], 9);
  