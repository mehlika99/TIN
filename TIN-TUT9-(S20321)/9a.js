var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/cal', function (req, res) {
    var data = req.body;
    console.log(data);
    var num1 = parseFloat(data["num1"]);
    var num2 = parseFloat(data["num2"]);
    var result;

    switch(data["operator"]){
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
             result = num1 / num2;
             break;
        default:
            result = 'Wrong input';
    }
    data["result"] = result;
    res.json(data);

 })

var server = app.listen(3000, function() {
    console.log('Listening on port: ' + server.address().port);
})
