const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function printDevelopers() {
  let developers = employees.filter(
    (employee) => employee.profession === "developer"
  );
  console.log(developers);
}

function addNewEmployee() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

function concatArrays() {
  let additionalEmployees = [
    { id: 5, name: "michael", age: "22", profession: "developer" },
    { id: 6, name: "emma", age: "21", profession: "designer" },
  ];
  const combinedArray = employees.concat(additionalEmployees);
  console.log(combinedArray);
}

function removeAdmins() {
  let filteredEmployees = employees.filter(
    (employee) => employee.profession !== "admin"
  );
  console.log(filteredEmployees);
}
