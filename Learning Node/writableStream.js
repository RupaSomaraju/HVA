var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var mywriteStream= fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
    mywriteStream.write(chunk);
});
