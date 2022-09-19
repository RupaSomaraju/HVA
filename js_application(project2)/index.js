let x=1;
while(x!=0){
let op=+prompt("1.addtion \n 2.subtraction \n 3.multiplication \n 4.division \n");
let num1=+prompt("enter first number:");
let num2=+prompt("enter second number:");
switch(op){
    case 1:
        result=num1+num2;
        document.write(`${num1} + ${num2} = ${result}`);
        break;
    case 2:
        result=num1-num2;
        document.write(`${num1} - ${num2} = ${result}`);
        break;
    case 3:
        result=num1*num2;
        document.write(`${num1} * ${num2} = ${result}`);
        break;
    case 4:
        result=num1/num2;
        document.write(`${num1} / ${num2} =${result}`);
        break;
    default:
        document.write("Invalid operator");
        break;

}
}