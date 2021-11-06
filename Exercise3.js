/*
Aim : To Write a node.js program to check request header for cookies.
Procedure : 
1. Import the http package using "require"
2. use http.createServer() function to create a nodeJs server and pass in a callback function to handle user request 
3. In the callback function, the user request is processed for cookie check using the function checkCookie 
4. In the checkCookie function we check the request.headres.cookie property of the request object, 
  if it is undefined there are no cookies
5. we return the response to the user to notify whether the cookie is present or not  
 by using response.writehead() (for headers) and response.end() (for message)
*/
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