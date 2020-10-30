const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello World</h1><br><button id="clicker">Press</button>');
});

server.listen(port, ()=>{
   
    console.log('server running on port: '+port);
    
});