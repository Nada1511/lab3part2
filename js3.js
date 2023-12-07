
///////// part1 LOGIN//////////////////////////////////////////////

var username=prompt("please enter ur name ");
var password =prompt("please enter ur password ");

while(true){

    if (username==="admin"&& password==="421$$"){
        alert("welcome login success ")
    }
    else{
        alert("Data entered wrong");
        
    }
let finish = confirm("press ok if you are finished ");
if(finish){
    break;
}

   
 }

///////////////////////part1 Calc //////////////////////////////////////////////////

var num1=  Number(prompt("Enter ur first number :  "));

var operation =prompt("Enter the operation: ");

var num2 = Number(prompt("Enter second number "));

while(true){

    if(operation==="+"||operation==="sum"){
        alert("the result is:  "+ num1+num2)
    }
    else if (operation==="*"||operation==="multiplacation"){
        alert("the result is: "+num1*num2);
    }
    else if (operation==="/"||operation==="division"){
        alert("the result is :"+num1/num2);
    }
    else if (operation==="%"||operation==="modulus"){
        alert("the result is:  "+num1%num2);

    }

    else{
        alert("the input invalid ");
    }

    let finish = confirm("press ok if you are finished ");
    if(finish){
        break;
    }

}



