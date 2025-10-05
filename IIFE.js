function greet() {
  console.log('Hello');
}
greet(); // called later

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('Hello from IIFE');
})();

// arrow function IIFE
((arrow)=>{
    console.log(`Hello! from ${arrow}`);
})('Himanshu');

//

//if there are two iffe in a file and one iffe is not ended with (); then it will give error
// (function() {
//   console.log('Hello from IIFE');
// })  
// Error: Missing invocation ()