//all the 3 empty objects can be accessed so for that we named the variable as stuff


var stuff= require('./module patterns');


//executes the counter function (There are 3 modules in the array)
console.log(stuff.counter(['Rupa','Ramya','Anusha']));


//executes the adder function(The sum of the 2 numbers is 11)
console.log(stuff.adder(5,6));

//excutes the adder along with pi variable(The sum of the 2 numbers is 8.142)
console.log(stuff.adder(stuff.pi,5));