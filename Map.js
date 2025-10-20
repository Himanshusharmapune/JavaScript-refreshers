// const arr =[1,2,3,4,5];;
// const arr1 = arr.map((add)=> add + 10)
// console.log(arr1);

//here map is used to create a new array by performing some operation on each element of the original array
//you can also define the function separately and then pass it to map
//this thing can be done in forEach as well but map is more suitable for this purpose as it directly returns a new array with the modified elements

const arr =[1,2,3,4,5];;
const arr1 = arr.map((add)=> add + 10)
                .map((add)=> add + 10)      
                .filter((add)=> add >=22)
console.log(arr1);
//here we have chained map and filter methods. First we added 10 to each element two times using map and then filtered out the elements which are greater than or equal to 22 using filter method.