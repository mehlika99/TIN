function secondLowestGreatest(arr){
  arr.sort(function(x,y){
           return x-y;        
           });
  var value = [arr[0]];
  var result = [];
  for(var j=1; j < arr.length; j++){
    if(arr[j-1] !== arr[j]){
      value.push(arr[j]);
    }
  }
    result.push(value[1],value[value.length-2]);
  return result.join(',');  
}
console.log(secondLowestGreatest([1,2,3,4,5]));