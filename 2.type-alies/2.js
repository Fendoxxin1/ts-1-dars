"use strict";
function active(student) {
    let aktivlar = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].isActive) {
            aktivlar.push(student[i]);
        }
    }
    return aktivlar;
}
let students = [
    { name: "Ali", grade: 5, isActive: false },
    { name: "Vali", grade: 3, isActive: true },
    { name: "Guli", grade: 2, isActive: true },
];
console.log(active(students));
