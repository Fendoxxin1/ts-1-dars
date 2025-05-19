type Student = {
  name: string;
  grade: number;
  isActive: boolean;
};

function active(student: Student[]): Student[] {
  let aktivlar: Student[] = [];
  for (let i = 0; i < student.length; i++) {
    if (student[i].isActive) {
      aktivlar.push(student[i]);
    }
  }
  return aktivlar;
}

let students: Student[] = [
  { name: "Ali", grade: 5, isActive: false },
  { name: "Vali", grade: 3, isActive: true },
  { name: "Guli", grade: 2, isActive: true },
];

console.log(active(students));
