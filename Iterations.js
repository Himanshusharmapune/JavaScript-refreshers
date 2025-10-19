//an expample of for loop
// for(i=0; i<=10; i++){
//     const element = i;
//     if(i===5){
//         console.log('five');
//     }
//     else console.log(element);
// }

// for(i=1;i<=10;i++){
//     console.log(`Outer loop is ${i}`);
//     for(j=1;j<=i;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

//Array loop
// let arr = [10,20,30,40,50];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// Break 
// for(let index = 1; index<=20; index++){
//     if(index==10){
//         console.log("Ten is found");    
//         break;
// }
//     console.log(index);
// }

// Continue
// for(let index = 1; index<=20; index++){
//     if(index==10){
//         console.log("Ten is found");    
//         continue;
// }
//     console.log(index);
// }

//While loop
// let index = 0;
// while(index<=10){
//     console.log(`value of index is ${index}`);
//     index = index+2;
// }

//For off loop
// const arr = [100,200,300,400,500];
// for(const element of arr){
//     console.log(element);
// } 
//here element takes value of each item in array one by one.

// const arr = "Hello World";
// for(const element of arr){
//     console.log(element);
// } 

//Maps
const map = new Map();
map.set('name','John');
map.set('age',30);
map.set('city','New York');

//console.log(map); //prints whole map

//console.log(map.get('name')); //.get gets value of key passed in it
//console.log(map.get('age'));
//console.log(map.get('city'));

//console.log(map.size); //.size gives number of key value pairs in map
//console.log(map.has('name')); // .has checks if key is present in map or not and returns boolean value


//now we are going to iterate through map using for of loop
// for(const [key,value] of map){
//     console.log(`${key} : ${value}`);
// }

//only for printing keys
for(const [key,value] of map){
    console.log(`${key}`);
}

//only for printing values
for(const [key,value] of map){
    console.log(`${value}`);
}