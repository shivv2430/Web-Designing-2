/**
 * EXPERIMENT 5: Array and Object Operations
 * Pure Logic & UX Injection (No HTML Changes)
 */

let employees = [];

// 1. ADD EMPLOYEE: Stores objects in an array
function addEmployee() {
    const nameInput = document.getElementById("name");
    const idInput = document.getElementById("id");
    const salaryInput = document.getElementById("salary");
    const deptInput = document.getElementById("department");

    const name = nameInput.value.trim();
    const id = idInput.value.trim();
    const salary = parseFloat(salaryInput.value);
    const department = deptInput.value.trim();

    // MANDATORY ALERT: Missing details
    if (!name || !id || isNaN(salary) || !department) {
        alert("⚠️ Please fill all fields before adding!");
        return;
    }

    // Creating the object
    const employee = {
        name,
        id,
        salary,
        department
    };

    // Storing in array
    employees.push(employee);

    // MANDATORY ALERT: Success
    alert("✅ Employee Added Successfully!");

    // Clear inputs
    nameInput.value = "";
    idInput.value = "";
    salaryInput.value = "";
    deptInput.value = "";

    // Show latest list
    displayEmployees();
}

// 2. DISPLAY ALL: Renders a styled table
function displayEmployees(data = employees) {
    const output = document.getElementById("output");
    
    if (data.length === 0) {
        output.innerHTML = "<p style='text-align:center; color: #64748b;'>No employee records found.</p>";
        return;
    }

    let tableHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Emp ID</th>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Using for...of loop for processing
    for (const emp of data) {
        tableHTML += `
            <tr>
                <td>${emp.id}</td>
                <td style="font-weight: 600;">${emp.name}</td>
                <td>${emp.department}</td>
                <td>₹${emp.salary.toLocaleString()}</td>
            </tr>
        `;
    }

    tableHTML += "</tbody></table>";
    output.innerHTML = tableHTML;
}

// 3. FILTER SALARY > 50,000
function filterSalary() {
    // Array Method: filter
    const highPaid = employees.filter(emp => emp.salary > 50000);
    displayEmployees(highPaid);
}

// 4. TOTAL SALARY: Renders a stat card
function totalSalary() {
    // Array Method: reduce (or loop)
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    renderResultCard("Total Salary Payout", `₹${total.toLocaleString()}`);
}

// 5. AVERAGE SALARY: Renders a stat card
function averageSalary() {
    if (employees.length === 0) {
        renderResultCard("Average Salary", "₹0");
        return;
    }
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const avg = total / employees.length;
    renderResultCard("Average Salary", `₹${avg.toFixed(2)}`);
}

// 6. COUNT BY DEPT: Uses prompt and renders card
function countDepartment() {
    const deptToFind = prompt("Enter Department name to count employees:");
    if (!deptToFind) return;

    let count = 0;
    // Using for...of or filter
    for (const emp of employees) {
        if (emp.department.toLowerCase() === deptToFind.toLowerCase()) {
            count++;
        }
    }

    renderResultCard(`${deptToFind.toUpperCase()} Dept Count`, `${count} Employee(s)`);
}

/** HELPER: Injects a styled result card into the output div **/
function renderResultCard(label, value) {
    const output = document.getElementById("output");
    output.innerHTML = `
        <div class="result-card">
            <span class="label">${label}</span>
            <span class="value">${value}</span>
        </div>
    `;
}