const user ={
    username: "himanshu",
    surname: "sharma",

    printMessage: function(){
        //console.log("How are you?")
      //  console.log(`username: ${this.username}`);
      console.log(this);
    }
    
    
}


console.log(user.printMessage());