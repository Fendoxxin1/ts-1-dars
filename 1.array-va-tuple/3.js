"use strict";
let foydalanuvchi = ["Ali", new Date(), true];
console.log(foydalanuvchi[0]);
console.log(foydalanuvchi[1]);
console.log(foydalanuvchi[2]);
if (foydalanuvchi[2]) {
    console.log(foydalanuvchi[0], "tizimga kirgan");
}
else {
    console.log(foydalanuvchi[0], "tizimga kirmagan");
}
