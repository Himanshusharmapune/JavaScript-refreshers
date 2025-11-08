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

 