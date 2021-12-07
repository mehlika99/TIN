function onClickButton() {
    var xhttp = new XMLHttpRequest();

    var select = document.getElementById("operationSelect");
    var op = select.options[select.selectedIndex].text;


    var obj = {
      num1: document.getElementById("number1").value,
      num2: document.getElementById("number2").value,
      operator: op
    };

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log('ready');
          document.getElementById("lett").innerHTML =
          this.responseText;
        }
      };

    xhttp.open('POST', 'http://localhost:3000/cal', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    console.log(JSON.stringify(obj));
    xhttp.send(JSON.stringify(obj));
}
