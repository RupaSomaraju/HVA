var http = require('http');
var fs = require('fs');



var server= http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    if(req.url === '/home' || req.url ==='/'){
        res.writeHead(200, {'content-type': 'html'});
        fs.createReadStream(_dirname + '/index.html').pipe(res);
    }

});

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');