/*
Aim : To Write a node.js program to get a local IP address
Procedure : 
1. Import the OS package using "require" and store it in a variable 
2. Get the list of all network interfaces using the networkInterfaces() method  
3. Choose your connected netowrk interface from the network interface object 
4. print the address property of the network interface object
*/

var os = require( 'os' );
var networkInterfaces = os.networkInterfaces();
var arr = networkInterfaces['en1']
console.log(arr[1].address)
var ip = require('ip')
console.log(ip.address())
//var ip = arr[1].address