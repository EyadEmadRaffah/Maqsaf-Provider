function addStudent() {
    const firstName = document.getElementById("firstName").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const className = document.getElementById("classSelect").value;

    if (firstName && fatherName && lastName && className) {
        const student = {
            id: Date.now(),
            firstName,
            fatherName,
            lastName
        };

        const existingData = JSON.parse(localStorage.getItem(className)) || [];
        existingData.push(student);
        localStorage.setItem(className, JSON.stringify(existingData));

        alert(`تم إضافة الطالب إلى ${document.getElementById("classSelect").options[document.getElementById("classSelect").selectedIndex].text}`);
        clearInputs();
    } else {
        alert("الرجاء ملء جميع الحقول!");
    }
}

function clearInputs() {
    document.getElementById("firstName").value = '';
    document.getElementById("fatherName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("classSelect").selectedIndex = 0;
}
