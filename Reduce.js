const arr = [1, 2, 3, 4, 5, 6];
const arr2 = arr.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
console.log(arr2);

//same example using function keyword
const arr3 = arr.reduce(function (accumlator, currentValue) {
  return accumlator + currentValue;
}, 0);
console.log(arr3);

//eg with shopping cart
const shoppingCart = [
  { item: "item1", price: 100 },
  { item: "item2", price: 200 },
  { item: "item3", price: 300 },
];
const Total = shoppingCart.reduce((accumlator, currentValue) => accumlator + currentValue.price, 0);
console.log(Total); 