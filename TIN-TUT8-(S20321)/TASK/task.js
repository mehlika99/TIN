var express = require('express');
var app = express();
var path = require("path");
var pug = require("pug");
var bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug')

app.get('/hello',(req,res) => {
  res.send('Hello World:)')
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'form.html'));
});

app.post("/formdata", (req, res) => {
    res.render('response', {firstname: req.body.firstname, lastname: req.body.lastname, studentnum: req.body.studentnum})
});

app.post("/jsondata", (req, res) => {
    res.send(
        `Json data is: \n firstname: ${req.body.firstname}  \n lastname: ${req.body.lastname} \n studentnum: ${req.body.studentnum}`
    );
});

app.listen(process.env.PORT || 1337, () => console.log(`Listening on port ${process.env.PORT || 1337}`));
