//ForEach Loop in JavaScript is used to iterate over elements of an array. It executes a provided function once for each array element.

// const a = [1,2,3,4,5]
// a.forEach(function(b){
//     console.log(b)
// });

//you can also define the function separately and then pass it to forEach
// function printMe(item){
//     console.log(item)
// }
// a.forEach(printMe);

// a.forEach((item, index, arr)=> {
//     console.log(item, index, arr); //here item is the current element, index is the index of current element and arr is the whole array
// });

//here we have used objects in an array and then used forEach to print a specific property of each object
// const arr=[{name:'himanshu', age:24}, {name:'john', age:30}, {name:'doe', age:22}];
// arr.forEach((item)=>{
//     console.log(item.name)
// })

const num1 = [1,2,3,4,5];
const num2 =[];

num1.forEach((num)=>{
    if(num>2){
        num2.push(num);
    }
})

console.log(num2);