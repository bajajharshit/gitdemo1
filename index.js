const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req,res){
    console.log(req.url);

    let filename = "";

    switch (req.url){
        case '/' :
            filename = "./index.html";
            break;
        case '/page1' :
            filename = "./page1.html";
            break;
        // default :
        // filename = "./404.html";
    }

    fs.readFile(filename, function(err,data){
        if(err){
            console.log('error occured - ',err);
            return res.end('error');
        }
        return res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port);;