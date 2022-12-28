/*setTimeout(function(){
    console.log("after 5 seconds this function will work upto that it got fired");
},5000);

var time=0;
setInterval(function(){
    time=time+2;
    console.log(time + "seconds have passed");
},2000);
*/

/*var time=0;
var timer=setInterval(function(){
    time=time+2;
    console.log(time + "seconds have passed");
    if(time>5){
        clearInterval(timer);
    }
},2000);*/

/* tells the directory that user in*/
//console.log(__dirname);

/*tells the filename that user in*/
//console.log(__filename);

//require,explore are some other GlobalObjects//


function sayhi(){
    console.log("hi");
}
sayhi();

function saybye(){
    console.log("bye");
}
saybye();

function callback(fun){
    fun();
}

callback(sayhi);