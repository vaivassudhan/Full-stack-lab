/*
Aim : To Write a node.js program to get files or directories of a directory in JSON format.
Procedure : 
1. Load the required Nodejs pacakges using "require"
2. Pass the directory path ("./") and callback function in fs.readdir(path, callbackFunction) Method.
3. The callback function should have error handling and result handling logic.
4. Use JSON.stringfy() function to convert the array of files into JSON
*/

const fs=require('fs');
fs.readdir('./', (err, files) => {
    let files_json = JSON.stringify({files})
    console.log(files_json)
});