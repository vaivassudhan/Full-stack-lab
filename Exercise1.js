const fs=require('fs');
fs.readdir('./', (err, files) => {
    let files_json = JSON.stringify({files})
    console.log(files_json)
});