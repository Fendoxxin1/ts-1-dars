"use strict";
function matn(arr) {
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i] + ",";
    }
    return temp;
}
let arr = ["ali", "vali", "guli"];
console.log(matn(arr));
