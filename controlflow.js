// //if
// const isUserLoggedIn = true;
// if(isUserLoggedIn){

// }
// const score = 1000;

// if(score>100){
//      let power = "fly"   
//     //var power = "fly"  referring to below comment
//     console.log(`power is : ${power}`);
// }


// if we call console.log(power) here it will give error because power is block scope variable and it is only accessible inside the if block
// console.log(`power is : ${power}`); // it will give error
// we can access power variable here if we declare it with var keyword because var is function scope variable
// console.log(`power is : ${power}`); // it will not give error if we declare power with var keyword

//implicit scope
// const balance = 1000;
// if(balance>500) console.log("Test");

//Logical AND
// const isUserLoggedIn = true;
// const debitCard = true;
// if(isUserLoggedIn && debitCard){
//     console.log("User can make a purchase");
// }
//Logical OR
// const isUserLoggedIn1 = false;
// const debitCard1 = true;        
// if(isUserLoggedIn1 || debitCard1){
//     console.log("User can make a purchase");
// }

//Switch case
const month = "feb";

switch(month){
    case "jan":
        console.log("January"); 
        break;
    case "feb":
        console.log("February");    
        break;
    case "mar":
        console.log("March");   
        break;
    case "apr":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
    default:
        console.log("Invalid month");
        break;
}

//Truthy and Falsy values