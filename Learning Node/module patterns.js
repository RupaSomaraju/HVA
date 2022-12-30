/*
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in the array';
};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};


var pi=3.142;


//these are the empty modules for accessing the contents in the above function and also from variable
module.exports.counter = counter;
module.exports.adder=adder;
module.exports.pi=pi;

*/

/*
module.exports.counter  = function(arr){
    return 'There are ' + arr.length + ' elements in the array';
};

module.exports.adder= function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

module.exports.pi=3.142;
*/


var counter = function(arr){
    return 'There are ' + arr.length + ' elements in the array';
};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};


var pi=3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
};


