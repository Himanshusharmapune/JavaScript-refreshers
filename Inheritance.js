class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Course = new Teacher("Himanshu sir", "himanshusharma@gmail.com", "123")
Course.addCourse();
Course.logMe();
console.log(Course instanceof Teacher);
console.log(Teacher instanceof User)
console.log(Course instanceof User);