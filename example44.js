// Find index of first failed student

const students = [
  { name: "Ravi", marks: 45 },
  { name: "Sneha", marks: 32 },
  { name: "Ali", marks: 70 }
];

// Find kar rahe hain pehla student jiske marks 35 se kam hain
const failIndex = students.findIndex((student) => student.marks < 35);

console.log(failIndex);  
// Output: 1
