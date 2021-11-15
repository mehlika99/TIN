function convert() {

    var e = document.getElementById("start");
    var selected = e.value;
    var num = parseInt(document.getElementById("value").value);
    if(selected==="F"){
        document.getElementById("converted").innerHTML=(num-32)*(5/9) + " °C";
    }
    else {
        document.getElementById("converted").innerHTML=(num*(9/5))+32 + " °F";
    }
}

function choosen() {
    var e = document.getElementById("start");
    var selected = e.value;
    if(selected==="F"){
        document.getElementById("end").innerHTML="Celcius";
    }
    else {
        document.getElementById("end").innerHTML="Fahrenheit";
    }
}
