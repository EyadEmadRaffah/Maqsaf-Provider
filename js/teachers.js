// Open Modal
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Add Employee
function addEmployee() {
    const firstName = document.getElementById('firstName').value;
    const fatherName = document.getElementById('fatherName').value;
    const lastName = document.getElementById('lastName').value;
    const jobTitle = document.getElementById('jobTitle').value;

    if (firstName && fatherName && lastName && jobTitle) {
        const tableBody = document.getElementById('employeeTableBody');
        const rowCount = tableBody.rows.length + 1;

        const row = `<tr>
                        <td>${(rowCount).toString().padStart(2, '0')}</td>
                        <td>${firstName}</td>
                        <td>${fatherName}</td>
                        <td>${lastName}</td>
                        <td>${jobTitle}</td>
                        <td><button onclick="deleteEmployee(this)">حذف</button></td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);

        closeModal();
        clearInputs();
    } else {
        alert("الرجاء ملء جميع الحقول!");
    }
}

// Delete Employee
function deleteEmployee(button) {
    button.parentElement.parentElement.remove();
    updateRowNumbers();
}

// Update Row Numbers
function updateRowNumbers() {
    const rows = document.querySelectorAll("#employeeTableBody tr");
    rows.forEach((row, index) => {
        row.children[0].textContent = (index + 1).toString().padStart(2, '0');
    });
}

// Search Employees
function searchEmployees() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll("#employeeTableBody tr");

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(searchInput) ? '' : 'none';
    });
}

// Clear Inputs
function clearInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('fatherName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('jobTitle').value = '';
}
