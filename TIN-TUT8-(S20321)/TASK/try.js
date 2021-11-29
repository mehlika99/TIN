var express = require('express');
var app = express();
app.get('/hello',function(requested,response){
  response.send('Hello:)')
});

app.listen(1337,function(){
  console.log('Listening at port 1337')
});
