var http = require("http");

http.createServer(function(request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('HELLO WORLD !!!');
}).listen(8000);

console.log('Server running at localhost:8000');