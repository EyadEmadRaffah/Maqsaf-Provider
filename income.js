// Download CSV File
function downloadIncomeData() {
    const rows = [
        ["رقم الصنف", "اسم الصنف", "سعر الصنف", "عدد المبيعات", "السعر الإجمالي"],
        ["0001", "ساندوتش تونة", "3", "300", "ريال 900"],
        ["0002", "ساندوتش جبنة", "2", "400", "ريال 800"],
        ["0003", "سلطة", "5", "250", "ريال 1250"],
    ];

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM for Arabic text
    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "monthly_income_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Go Back Function
function goBack() {
    window.history.back();
}
// 3eed