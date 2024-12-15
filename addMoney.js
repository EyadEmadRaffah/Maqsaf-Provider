// Function to Recharge Wallet
function rechargeWallet() {
    const amount = document.getElementById("rechargeAmount").value;

    if (amount && amount > 0) {
        alert(`تم شحن المحفظة بمبلغ ${amount} ريال بنجاح.`);
    } else {
        alert("الرجاء إدخال مبلغ صالح لشحن المحفظة.");
    }
}

// Go Back Function
function goBack() {
    window.history.back();
}
// 3eed