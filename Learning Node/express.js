/*
--->Easy and flexible routing system
--->Integrates with many templating engines
--->Contains A middleware framework
--->At the end express is just a module written in Node.js

HTTP Methods

--->GET
--->POST
--->DELETE
--->PUT

Responding to Requets

--->GET -app.get('route',fn)
--->POST -app.post('route',fn)
--->DELETE -app.delete('route',fn)

*/





var express = require('express');

var apps = express();

apps.get('view engine','ejs');

apps.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

apps.get('/contact',function(req,res){
    res.sendFile(_dirname + '/contact.html');
});

apps.get('/profile/:name', function(req,res){
    var data={age:29, job: 'student', hobbies: ['eating', 'reading','listening']};
    res.render('profile',  {person:req.params.name, data: data});
});


apps.listen(3000);