function createEmployeeList(employees) {
    const employeeList = [];

    for (const employee of employees) {
        const personalNum = employee.length;
        employeeList.push({
            name: employee,
            personalNumber: personalNum
        });
    }

    return employeeList;
}

function printEmployeeList(employeeList) {
    for (const employee of employeeList) {
        console.log(`Name: ${employee.name} - Personal Number: ${employee.personalNumber}`);
    }
}

const inputEmployees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

const employees = createEmployeeList(inputEmployees);

printEmployeeList(employees);