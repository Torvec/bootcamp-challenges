require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const SQLquery = require("./db/queries.js");

let queryString = "";
const sqlInstance = new SQLquery();

async function queryDatabase(query, params = []) {
    // Variable to hold the connection to the database
    let dbConnection; 
    try {
        // Obfuscate the database credentials in a .env file
        const dbHost = process.env.DB_HOST;
        const dbName = process.env.DB_NAME;
        const dbUser = process.env.DB_USER;
        const dbPassword = process.env.DB_PASSWORD;
        // Connect to the database
        dbConnection = await mysql.createConnection({
            host: dbHost,
            user: dbUser,
            password: dbPassword,
            database: dbName
        });
        // Query the database using prepared statements
        const [results] = await dbConnection.query(query, params);
        // Display results
        return results;
    } catch (error) {
        console.error("Error querying the database:", error);
    } finally {
        // Close the connection to the database if there is one
        if (dbConnection) {
            dbConnection.end();
        }
    }
};

// View all departments, roles, employees
async function viewAllByTable(dbTable) {
   
    if (dbTable === "departments") {
        queryString = sqlInstance.viewAllDepartments();
    }
    if (dbTable === "roles") {
        queryString = sqlInstance.viewAllRoles();
    }
    if (dbTable === "employees") {
        queryString = sqlInstance.viewAllEmployees();
    }

    const result = await queryDatabase(queryString);
    console.table(result);
};

// View employees by manager
async function viewAllByManager() {
    
    // Get manager names from DB to use as choices for inquirer prompt
    queryString = sqlInstance.viewAllEmployeesByManager('managerID');
    const managers = await queryDatabase(queryString);
    const managersChoicesList = managers.map(manager => ({
        name: `${manager.first_name} ${manager.last_name}`,
        value: manager.id // store the manager's id as the value for later use
    }));

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "managerChoice",
            message: "Which manager's employees would you like to view?",
            choices: managersChoicesList,
        }
    ]);

    // Display the selected manager's employees
    queryString = sqlInstance.viewAllEmployeesByManager('employees');
    const result = await queryDatabase(queryString, [answer.managerChoice]);
    console.table(result);
};

// View employees by department
async function viewAllByDepartment() {

    // Get department names from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getDepartmentNames');
    const departments = await queryDatabase(queryString);
    const departmentChoicesList = departments.map(department => `${department.department_name}`);
    
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "departmentChoice",
            message: "Which department's employees would you like to view?",
            choices: departmentChoicesList,
        }
    ]);

    // Display the selected department's employees
    queryString = sqlInstance.viewAllEmployeesByDepartment();
    const result = await queryDatabase(queryString, [answer.departmentChoice]);
    console.table(result);
}

// View department payroll budget (sum of salaries for all employees in a department)
async function viewDepartmentBudget() {
    
    // Get department names from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getDepartmentNames');
    const departments = await queryDatabase(queryString);
    const departmentList = departments.map(department => department.department_name);

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "departmentBudgetChoice",
            message: "Which departments's budget would you like to view?",
            choices: departmentList,
        }
    ])
    
    // Display the selected department's budget
    queryString = sqlInstance.viewDepartmentBudget();
    const result = await queryDatabase(queryString, [answer.departmentBudgetChoice]);
    console.table(result);
}

// Add a department to database
async function addDepartment() {
    
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the department you would like to add?",
        }
    ])

    // Add the department to the database that the user entered
    queryString = sqlInstance.addThisToDB('addDepartment');
    await queryDatabase(queryString, [answer.departmentName]);
    console.log(`${answer.departmentName} ADDED TO DEPARTMENTS`);
}

// Add a role to database
async function addRole() {
    
    // Get department names from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getDepartmentNames');
    const departments = await queryDatabase(queryString);
    const departmentChoices = departments.map(dept => dept.department_name);

    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message: "What is the name of the role you would like to add?",
        },
        {
            type: "input",
            name: "roleSalary",
            message: "What is the salary of the role you would like to add?",
        },
        {
            type: "list",
            name: "roleDepartment",
            message: "Which department does this role belong to?",
            choices: departmentChoices,
        }
    ])
    
    // Get department ID from the user's selected choice
    queryString = sqlInstance.getQuery('getDepartmentID');
    const departmentName = answer.roleDepartment;
    const departmentData = await queryDatabase(queryString, [departmentName]);
    const departmentID = departmentData[0].id;

    // Add the role to the database
    queryString = sqlInstance.addThisToDB('addRole');
    await queryDatabase(queryString, [answer.roleName, answer.roleSalary, departmentID]);
    
    // Log the role that was added
    console.log(`${answer.roleName} ADDED TO ${answer.roleDepartment} WITH SALARY ${answer.roleSalary}`);
}

// Add an employee to database
async function addEmployee() {
    
    // Get role titles from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getRoleTitles');
    const roles = await queryDatabase(queryString);
    const roleChoices = roles.map(role => role.title);
    
    // Get manager names from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getManagers');
    const managers = await queryDatabase(queryString);
    const managerChoices = managers.map(manager => `${manager.first_name} ${manager.last_name}`);

    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the first name of the employee you would like to add?",
        },
        {
            type: "input",
            name: "employeeLastName",
            message: "What is the last name of the employee you would like to add?",
        },
        {
            type: "list",
            name: "employeeRole",
            message: "What is the role of the employee you would like to add?",
            choices: roleChoices,
        },
        {
            type: "list",
            name: "employeeManager",
            message: "Who is the manager of the employee you would like to add?",
            choices: managerChoices,
        }
    ])

    // Get the role ID from the selection the user made
    queryString = sqlInstance.getQuery('getRoleID');
    const roleName = answer.employeeRole;
    const roleData = await queryDatabase(queryString, [roleName]);
    const roleID = roleData[0].id;

    // Get the manager ID from the selection the user made
    queryString = sqlInstance.getQuery('getManagerID');
    const managerName = answer.employeeManager.split(" ");
    const managerData = await queryDatabase(queryString, [managerName[0], managerName[1]]);
    const managerID = managerData[0].id;
    
    // Add the employee to the database
    queryString = sqlInstance.addThisToDB('addEmployee');
    await queryDatabase(queryString, [answer.employeeFirstName, answer.employeeLastName, roleID, managerID])

    // Log the employee that was added
    console.log(`${answer.employeeFirstName} ${answer.employeeLastName} ADDED WITH ROLE ${answer.employeeRole} AND MANAGER ${answer.employeeManager}`);
}

async function updateEmployeeRole() {
    
    // Get employee names from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getEmployeeNames');
    const employees = await queryDatabase(queryString);
    const allEmployeeList = employees.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id // store the employee's id as the value for later use
    }));

    // Get role titles from DB to use as choices for inquirer prompt
    queryString = sqlInstance.getQuery('getRoleTitles');
    const roles = await queryDatabase(queryString);
    const roleList = roles.map(role => role.title);
    
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "employeeChoice",
            message: "Which employee's role would you like to update?",
            choices: allEmployeeList,
        },
        {
            type: "list",
            name: "employeeRole",
            message: "What is the employee's new role?",
            choices: roleList,
        }
    ])

    // Get the role ID from the role title selection the user made
    queryString = sqlInstance.getQuery('getRoleID');
    const roleName = answer.employeeRole;
    const roleData = await queryDatabase(queryString, [roleName]);
    const roleID = roleData[0].id;

    // Update the employee's role in the database
    queryString = sqlInstance.updateEmployeeRole();
    await queryDatabase(queryString, [roleID, answer.employeeChoice]);

    console.log(`${answer.employeeChoice} ROLE UPDATED TO ${answer.employeeRole}`);
}

// Start menu for the CLI
async function startMenu() {
    // Keeps the start menu active until the user chooses to exit
    let startMenuActive = true;
    while (startMenuActive) {
        const startMenuPrompt = await inquirer.prompt([
            {
                type: "list",
                name: "menuChoice",
                message: "What would you like to do?",
                choices: [
                    "VIEW all Departments",
                    "VIEW all Roles",
                    "VIEW all Employees",
                    "VIEW all Employees by Manager",
                    "VIEW all Employees by Department",
                    "VIEW Department Budget",
                    "ADD a Department",
                    "ADD a Role",
                    "ADD an Employee",
                    "UPDATE an Employee Role",
                    new inquirer.Separator(),
                    new inquirer.Separator(),
                    "EXIT",
                    new inquirer.Separator(),
                    new inquirer.Separator(),
                ]
            }
        ]);
        switch (startMenuPrompt.menuChoice) {
            case "VIEW all Departments":
                await viewAllByTable('departments');
                break;
            case "VIEW all Roles":
                await viewAllByTable('roles');
                break;
            case "VIEW all Employees":
                await viewAllByTable('employees');
                break;
            case "VIEW all Employees by Manager":
                await viewAllByManager();
                break;
            case "VIEW all Employees by Department":
                await viewAllByDepartment();
                break;
            case "VIEW Department Budget":
                await viewDepartmentBudget();
                break;
            case "ADD a Department":
                await addDepartment();
                break;
            case "ADD a Role":
                await addRole();
                break;
            case "ADD an Employee":
                await addEmployee();
                break;
            case "UPDATE an Employee Role":
                await updateEmployeeRole();
                break;
            case "EXIT":
                // Exits the while loop and the terminal
                startMenuActive = false; 
                break;
        }
    }
}

startMenu();