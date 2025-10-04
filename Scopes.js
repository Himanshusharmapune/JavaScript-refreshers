if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("inner value", a);
}
let a = 50;
console.log(a);

// console.log(b);
console.log(c);

// curly braces are scopes {}

// Nested scope

function one() {
  const username = "Himanshu";

  function two() {
    const Lastname = "Sharma";
    console.log(username);
  }

  two();
}

one();

//Nested scope 2
if (true) {
  const username = "Carry";
  if (username === "Carry") {
    const Lastname = "minati";
    console.log(username + " " + Lastname);
  }
//   Console.log(Lastname); // error
}
// console.log(username); // error


// Hoisting

console.log(Try(10)); // works
function Try(num){
    return num + 10;
}


console.log(Try2(10)); // error
const Try2 = function(num){ // does not work & this is called function expression
    return num + 20;
}

