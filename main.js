const http = require('http');

const server = http.createServer(function (req, res) {

    if(req.url == '/'){
        res.writeHead(200, {'content':'text/html'})
        res.write(`<h1>This is home Page</h1>`)
        res.end();
    }

    else if(req.url == '/about'){
        res.writeHead(200, {'content':'text/html'})
        res.write(`<h1>This is about Page</h1>`)
        res.end();
    }

    else if(req.url == '/contact'){
        res.writeHead(200, {'content':'text/html'})
        res.write(`<h1>This is contact Page</h1>`)
        res.end();
    }
    
    else if(req.url == '/test'){
        res.writeHead(200, {'content':'text/html'})
        res.write(`<h1>This is test Page</h1>`)
        res.end();
    }
});

server.listen(5050)
console.log('Server is running from port: 5050');