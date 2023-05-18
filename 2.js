const students = [
  {
    name: "Alice",
    age: 20,
    grades: [80, 90, 95],
    hobbies: ["reading", "painting"]
  },
  {
    name: "Bob",
    age: 21,
    grades: [70, 85, 80],
    hobbies: ["gaming", "swimming"]
  },
  {
    name: "Charlie",
    age: 19,
    grades: [95, 80, 90],
    hobbies: ["writing", "dancing"]
  }
];

function findTopStudents(threshold) {
  return students.filter((student) => {
    const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return averageGrade > threshold;
  });
}

function addHobby(name, hobby) {
  const student = students.find((student) => student.name === name);
  if (student) {
    student.hobbies.push(hobby);
    console.log(`Hobby '${hobby}' added to student '${name}'.`);
  } else {
    console.log(`Student '${name}' does not exist.`);
  }
}

function updateStudent(name, updatedInfo) {
  const student = students.find((student) => student.name === name);
  if (student) {
    Object.assign(student, updatedInfo);
    console.log(`Student '${name}' information updated.`);
  } else {
    console.log(`Student '${name}' does not exist.`);
  }
}
