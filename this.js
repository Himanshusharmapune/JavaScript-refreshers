//This keyword is used to refer to the current object.
const user = {
    username:"Himanshu",
    age: 23,

    WelcomeMessage: function(){
        console.log(`${this.username}${this.age} , welcome to the website` );
        
    }
}

user.WelcomeMessage()

// user.WelcomeMessage({
//      username:"Himanshu",
//     age: 23,
// })
