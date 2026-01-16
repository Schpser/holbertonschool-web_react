interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Schps",
  lastName: "Hollow",
  age: 25,
  location: "Tokyo"
};

const student2: Student = {
  firstName: "Homer",
  lastName: "Simpson", 
  age: 28,
  location: "Springfield"
};

const studentsList: Student[] = [student1, student2];

// Table
const table = document.createElement('table');

studentsList.forEach(student => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
