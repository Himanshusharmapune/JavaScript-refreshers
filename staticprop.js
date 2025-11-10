//static keyword is used when u dont want the method to be accessed by another class
class User{
    constructor(username,id){
        this.username = username;
        this.id = id;
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
   static createId(){
       console.log(`id: ${this.id}`)
    }
}
class Teacher extends User{
    constructor(username, email, id){
        super(username,id)
        this.email = email
       
        
    }
}
const Teacherid = new Teacher("Himanshu","himanshu@gmail.com", "111")
// const himanshu = new  User("Himanshu");
// console.log(himanshu.createId())
console.log(Teacherid.createId())