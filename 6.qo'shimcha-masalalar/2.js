"use strict";
let products = [
    { id: 1, name: "iPhone 15 Pro Max", price: 1499, instock: 10 },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 1399, instock: 15 },
    { id: 3, name: "MacBook Air M3", price: 1699, instock: 8 },
    { id: 4, name: "Dell XPS 15", price: 1799, instock: 5 },
    { id: 5, name: "Sony WH-1000XM5 Headphones", price: 399, instock: 20 },
    { id: 6, name: "Logitech MX Master 3S Mouse", price: 99, instock: 50 },
    { id: 7, name: "iPad Pro 12.9", price: 1299, instock: 12 },
    { id: 8, name: "Lenovo ThinkPad X1 Carbon", price: 1899, instock: 6 },
    { id: 9, name: "Asus ROG Gaming Laptop", price: 2199, instock: 4 },
    { id: 10, name: "Google Pixel 8 Pro", price: 1099, instock: 18 },
];
let prd = products.filter((e) => e.price > 100);
console.log(prd);
