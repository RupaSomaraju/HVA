var fs=require('fs');

//unlink method
//fs.unlink('WriteMe.txt');


/*Synchronous methods

//creating a directory
fs.mkdirSync('stuff');

//removedirectory
//fs.rmdirSync('stuff');
*/

/*Asynchronus methods

fs.mkdir('stuff',function(){
    fs.readFile('textfile.txt','utf-8',function(err,data){

    });fs.writeFile('./stuff/writeMe.txt',data);
});

*/

fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff');
});
//fs.rmdir('stuff');


