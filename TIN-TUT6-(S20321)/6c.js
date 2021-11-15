function withdrawMoney() {
    var m, text;
  
    
    m = document.getElementById("moneyAmount").value;
  
    
    if (isNaN(m) || m < 100 || m > 1000) {
      alert("Input not valid you can  withdraw at least 100 PLN at most 1000 PLN");
    } else {
      alert("You can withdraw your money input ok"+document.getElementById("fname").innerHTML+document.getElementById("lname").innerHTML) ;
    }
  }
  