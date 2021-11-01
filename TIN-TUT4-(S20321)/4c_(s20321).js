const n='hello';
const isPalindrome=(str)=>{
  for(let i=0;i<str.length;i+=1){
    if(str[i]!==str[str.length-1-i]){
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(n));