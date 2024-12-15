// Open Modal
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Add Student
function addStudent() {
    const firstName = document.getElementById('firstName').value.trim();
    const fatherName = document.getElementById('fatherName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const className = "grade1"; // Automatically set to "grade1"

    if (firstName && fatherName && lastName) {
        // Create a student object
        const student = {
            id: Date.now(), // Unique ID
            firstName,
            fatherName,
            lastName,
            className
        };

        // Save to localStorage under "grade1"
        const students = JSON.parse(localStorage.getItem("grade1")) || [];
        students.push(student);
        localStorage.setItem("grade1", JSON.stringify(students));

        alert(`تم إضافة الطالب ${firstName} إلى الصف الأول`);
        closeModal();
        clearInputs();
        fetchStudents(); // Refresh the table to show the new student
    } else {
        alert("الرجاء ملء جميع الحقول!");
    }
}

// Clear Inputs
function clearInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('fatherName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('classSelect').selectedIndex = 0;
}

// Delete Student
function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem("grade1")) || [];
    students = students.filter(student => student.id !== id);
    localStorage.setItem("grade1", JSON.stringify(students));
    fetchStudents(); // Refresh the table
}

// Fetch Students and Populate the Table
function fetchStudents() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    const students = JSON.parse(localStorage.getItem("grade1")) || [];

    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${(index + 1).toString().padStart(4, '0')}</td>
                <td>${student.firstName}</td>
                <td>${student.fatherName}</td>
                <td>${student.lastName}</td>
                <td>الصف الأول</td>
                <td><button onclick="deleteStudent(${student.id})">حذف</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Search Students
function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll("#studentTableBody tr");

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(searchInput) ? '' : 'none';
    });
}

// On Page Load
document.addEventListener("DOMContentLoaded", fetchStudents);
