const schools = [
  {
    name: "Greenwood High",
    students: [
      { name: "Alice", grade: "A" },
      { name: "Bob", grade: "B" }
    ]
  },
  {
    name: "Sunrise Academy",
    students: [
      { name: "Charlie", grade: "A+" },
      { name: "Diana", grade: "A" }
    ]
  }
];

// Corrected map syntax
const data1 = schools.map((school, index) => {
  return school; // or return something else based on your need
});

// console.log(data1[1].students);
const allStudents = data1.flatMap(school => school.students);
console.log(allStudents);
