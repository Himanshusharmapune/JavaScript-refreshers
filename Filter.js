// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.filter((num) => {
//     return num >4
// })
// console.log(arr1);
//here filter is used to filter out the elements based on the condition provided in the callback function
//you can also define the function separately and then pass it to filter
//this thing can be done in forEach as well but filter is more suitable for this purpose as it directly returns a new array with the filtered elements

const users = [
    {name: 'himanshu', age: 24},
    {name: 'john', age: 30},
    {name: 'doe', age: 22},
    {name: 'doe', age: 27},
    {name: 'doe', age: 21},
    {name: 'doe', age: 29},
    {name: 'alice', age: 28},
    {name: 'bob', age: 19},
    {name: 'charlie', age: 35}
];

const request = users.filter((user) => user.age > 25)
const request1 = users.filter((user) => user.name === 'doe')
const request2 = users.filter((user) => user.name === 'doe' && user.age > 25)
//console.log(request);
//console.log(request1);
console.log(request2);