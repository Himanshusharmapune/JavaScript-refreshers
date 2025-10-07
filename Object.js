// let obj = {
//     name:"himanshu",
//     age:21,
//     city:"panvel"
// }
// //two ways to access the object properties
// // console.log(obj.name);
// // console.log(obj["age"]);

// //new way of accesing the object properties
// let aa="city";
// console.log(obj[aa]);


//eg2 accessing nested object properties
// const user = {
//     name: "Himanshu",
//     address:{
//         city:"panvel",
//         state:"MH",
//         pin:410206,
//         location:{
//             lat:123,
//             long:456,
//         }
//     }
//}
// console.log(user.address.location.long);
// //a better way to access the nested object properties
// let {lat} = user.address.location;
// console.log(lat);
// //now you can use the definded variable lat directly any where in the code 

//Looping 1 lets study for-in 
// for(let key in user){
//     console.log(key);
// }
//so the output will be the keys of the object basically name and address

 //if we want the values of the object
// for(let key in user){
//     console.log(key, user[key]);
// }
//so the output will be the values of the object basically himanshu and address object

//Looping 2 lets study Object.keys(these are used to get the keys of the object in array form)
// console.log(Object.keys(user));
//output will be [ 'name', 'address' ]

//Looping 3 lets study Object.values(these are used to get the values of the object in array form)
// console.log(Object.values(user));
//output will be [ 'Himanshu', { city: 'panvel', state: 'MH', pin: 410206, location: [Object] } ]

//Looping 4 lets study Object.entries(these are used to get the keys and values of the object in array form)
//console.log(Object.entries(user));
//output will be [ [ 'name', 'Himanshu' ], [ 'address', { city: 'panvel', state: 'MH', pin: 410206, location: [Object] } ] ]

//spread operator in object is used to copy the object
let obj1 = {
    name:"himanshu",
    age:21,
    address:{
        city:"panvel",
    }
};
// let obj2 = {...obj1};
// console.log(obj2);
//output will be { name: 'himanshu', age: 21 }

//if we want to add new key value pair in the obj1 we use Object.assign
// let obj3 = Object.assign({height: "5 foot 9 inches"}, obj1);
// console.log(obj3); 


// VERY IMPORTANT CONCEPT :- DEEP CLONE
// let obj4 = {...obj1}
// obj4.address.city = "mumbai";
// console.log(obj4);
// console.log(obj1);
//in this code we have upadted the city in obj2 but it also updated in obj1, to avoid this we use deep clone
//deep clone is used to create a new object with the same properties as the original object, but with a new reference
let obj5 = JSON.parse(JSON.stringify(obj1));
obj5.address.city = "mumbai";
console.log(obj5);
console.log(obj1);