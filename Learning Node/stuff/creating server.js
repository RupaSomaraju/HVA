
/*--> We need to use core modules and the module is HTTP.   */

var http = require('http');



var server= http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.end('Hey! Hi Friends');

});


server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');




/*                  request
            client ---------->   server
                 req+req header


                    response
            client ----------->   server
                    res+res header



---> Header section contains extra information i.e.. a little bit more about
     the HTML but it doesn't display on the browser. The header contains the things like are:
        -->Content type: plain test,HTML,JSON 
        -->Status: Status can be put in Response headers i.e like 200 - which means the status is ok and succesfully rendered
                                                                  400 - means that the page is not found 



                    */