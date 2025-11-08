/*
function mulitpleBy5(num){
    return num*5
}
mulitpleBy5.value = 5
console.log(mulitpleBy5.value)
console.log(mulitpleBy5(5))
console.log(mulitpleBy5.prototype)
*/


//using and understand the importance of new keyword
// function create User(username,score){
//     this.username = username;
//     this.score = score;
// }

// createUser.prototype.printMe = function(){
//     console.log(`${this.username} your score is ${this.score}` );
// }

// const chai = new createUser("Himanshu", 40)

// chai.printMe()


/*lets backtrack and unbserstand, 
chai.prints() prints whatever is in printMe method
const chai = new createUser("Himanshu", 40) creates and new constructor that passes value to chai object

createUser.prototype.printMe = function(){
    console.log(`${this.username} your score is ${this.score}` );
}  creates a printMe method which prints certain things and the print me is attached to createUser.prototype so that when a new object is created ican use the printMe function too.

function createUser(username,score){
    this.username = username;
    this.score = score;
} creates a function 

*/
 
/* 
    How to objects can access property from each oher?
    const user ={
    username: "Himanshu",
    age:23
}
const Teacher = {
    isAvailable: true,
    __proto__:user //one way of accessing object property
}

Teacher.__proto__= user //another way of accessing obj property

//a better/mordern to access property of another obj

Object.setPrototypeOf(user, Teacher)
*/


//removing blank spaces and print the actual length of the string.
let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Himanshu".trueLength();
"Reeta".trueLength();