"use strict";
function maxPrice(arr) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i].price) {
            max = arr[i].price;
            index = i;
        }
    }
    return arr[index];
}
let telefonlar = [
    { brand: "Samsung", model: "Samsung s23 ultra", price: 3000 },
    { brand: "Apple", model: "iPhone 16 pro max", price: 2000 },
];
console.log(maxPrice(telefonlar));
