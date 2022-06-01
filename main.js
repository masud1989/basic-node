const http = require('http');
const URL = require('url');

const server = http.createServer(function (req, res) {

   const myURL = 'http://reb.teletalk.com.bd/login.php?msg=Please%20login%20with%20your%20username%20and%20password';
   const urlObject = URL.parse(myURL, true);

    const myHostName = urlObject.host;
    const mypathName = urlObject.pathname;
    const mySearchName = urlObject.search;

    res.writeHead( 200, {'content-type': 'text/html'})
    // res.write(myHostName);
    // res.write(mypathName);
    res.write(mySearchName);
    res.end();



});

server.listen(5050)
console.log('Server is running from port: 5050');