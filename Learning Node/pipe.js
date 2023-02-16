/* ---> A pipe can exactly do the same thing take data from a read stream and then pipe it into a writestream so
again we have our data coming down the stream fills a buffer and sends a chunk of data route but instead of manually
listening or that.
*/

var http = require('http');
var fs = require('fs');



var server= http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200,{'content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    var mywriteStream= fs.createWriteStream(__dirname + '/writeMe.txt');
    myReadStream.pipe(res);   
    

});

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');
