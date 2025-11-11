class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}himanshui`
    }

    set password(value){
        this._password = value
    }
}

const himanshu = new User("h@himanshu.ai", "abc")
console.log(himanshu.email);