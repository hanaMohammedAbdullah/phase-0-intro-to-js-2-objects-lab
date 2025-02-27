// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
} //

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}

let count = 1;
while (count < 5) {
  debugger;
  if (count === 1) {
    console.log(`This loop has executed ${count} time.`);
  } else {
    console.log(`This loop has executed ${count} times.`);
  }
  count += 1;
}
