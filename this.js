//This keyword is used to refer to the current object.
const user = {
    username:"Himanshu",
    age: 23,

    WelcomeMessage: function(){
<<<<<<< HEAD
        console.log(`${this.username}${this.age} , welcome to the website` );
=======
        console.log(`${this.username} , welcome to the website` );
>>>>>>> 14d8a854bcf5f285f4b86fe41c597caab5f1fda5
        
    }
}

user.WelcomeMessage()

// user.WelcomeMessage({
//      username:"Himanshu",
<<<<<<< HEAD
//     age: 23,
=======
//     age: 23
>>>>>>> 14d8a854bcf5f285f4b86fe41c597caab5f1fda5
// })
