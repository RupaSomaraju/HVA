var events=require('events');

//eventemitter is used to create custom events like click
//Element.on('click', function(){})

/*
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(mssg){
    console.log(mssg);
});


//manually emitting the event and we are passing the data the string into this function
myEmitter.emit('someEvent','the event was emitted');
*/

//util module in Node.js-allows to inherit certain things in the object

var util=require('util');

//creating a new object constructor
var Person=function(name){
    this.name=name;
};

//using EventEmitter module and utility module
util.inherits(Person,events.EventEmitter);

var Rupa=new Person('Rupa');
var Ramya=new Person('Ramya');
var Anusha=new Person('Anusha');
var people=[Rupa,Ramya,Anusha];

//javascript method used to recycle
people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name +' said:'+mssg);
    });
});


Rupa.emit('speak','hey dudes');
Ramya.emit('speak','I want a curry');