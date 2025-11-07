//new keyword
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Shradha", 11, true)
console.log(userOne);
console.log(userTwo);