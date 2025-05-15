// Find student with passing marks

const students = [
  { name: "Amit", marks: 30 },
  { name: "Priya", marks: 75 },
  { name: "Zoya", marks: 45 }
];

// Find kar rahe hain pehla student jiske marks 50+ ho
const topper = students.find((student) => student.marks > 50);

console.log(topper);  
// Output: { name: 'Priya', marks: 75 }
