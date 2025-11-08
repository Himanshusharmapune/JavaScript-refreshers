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
function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.printMe = function(){
    console.log(`${this.username} your score is ${this.score}` );
}

const chai = new createUser("Himanshu", 40)

chai.printMe()


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
 