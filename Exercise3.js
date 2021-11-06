var http = require('http');

function checkCookie (request) {
    rc = request.headers.cookie;
    if(rc){
      return true
    }
    else{
      return false
    }
}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Cookie Present : '+checkCookie(request));
  //ßconsole.log(checkCookie(request))
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');