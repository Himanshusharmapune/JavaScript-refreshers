//declaring a class
// class Product{
//     constructor(ItemName, price,discount,productCode){
//         this.ItemName = ItemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }
// let pencil = new Product('Pencil', 10, 2, 'P10');
// console.log(pencil);

//class expression
// const Product1 = class Product{
//     constructor(ItemName, price,discount,productCode){
//         this.ItemName = ItemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }
// console.log(Product1.name);

//Getter and Setter
// const Product1 = class Product{
//     constructor(ItemName, price,discount,productCode){
//         this.ItemName = ItemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getDsicountValue(){
//         return this.discount
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
// }
// let chair = new Product1('Chair', 1000, 100, 'C100');
// console.log(chair.getDsicountValue);
// chair.setDiscountValue = 150;
// console.log(chair.getDsicountValue);      //