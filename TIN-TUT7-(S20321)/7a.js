const http = require('http');
const url = require("url");


var server = http.createServer((req,res)=>{//request coming into the server handel responses going backt to the server
   
    if(isNaN(parseInt(url.parse(req.url, true).query.num1)) || isNaN(parseInt(path.query.num2))){
        res.writeHead(400);//headers back to the response
        res.end("Bad request!");

    }else if(url.parse(req.url, true).pathname=='/add'){
        res.writeHead(200);
        res.end("num1 + num2 = " +(parseInt(url.parse(req.url, true).query.num1)+parseInt(url.parse(req.url, true).query.num2)));//end function to stop
    }else if(url.parse(req.url, true).pathname=='/sub'){
      res.writeHead(200);
        res.end("num1 - num2 = " +(parseInt(url.parse(req.url, true).query.num1)-parseInt(url.parse(req.url, true).query.num2)));
    }else if(path.pathname=='/mul'){
        res.writeHead(200);
        res.end("num1 * num2 = " +(parseInt(url.parse(req.url, true).query.num1)*parseInt(url.parse(req.url, true).query.num2)));
    }else if(url.parse(req.url, true).pathname=='/div'){
        res.writeHead(200);
        res.end("num1 / num2 = " +(parseInt(url.parse(req.url, true).query.num1)/parseInt(url.parse(req.url, true).query.num2)));
    } else{
        res.writeHead(404);
        res.end("Operation not found!");
    }      
       
}).listen(8000);


