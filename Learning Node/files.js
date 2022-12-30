var fs = require('fs');


//var textfile = fs.readFileSync('textfile.txt','utf-8');

//fs.readFile('textfile.txt','utf8');
//synchronous operation
//fs.writeFileSync('WriteMe.txt',textfile);

//asynchronus

fs.readFile('textfile.txt','utf8',function(err,data){
//err if one occur and data that we retrive from the file

    fs.writeFile('WriteMe.txt', data,function(err,result){
        if(err)
        console.log('error',err);
    });
//console.log(data);
});

//console.log('test');
//console.log(textfile);