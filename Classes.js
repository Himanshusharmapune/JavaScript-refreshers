//declaring a class
class Product{
    constructor(ItemName, price,discount,productCode){
        this.ItemName = ItemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}
let pencil = new Product('Pencil', 10, 2, 'P10');
console.log(pencil);