const resultInput = document.getElementById("result");

function appendToResult(value) {
    // Jika pengguna memasukkan koma, ubah jadi titik biar bisa dihitung
    if (value === ",") {
        value = ".";
    }
    resultInput.value += value;
}

function setOperation(operator) {
    const lastChar = resultInput.value.slice(-1);
    // Jika terakhir sudah operator, jangan tambah operator lagi
    if (["+", "-", "*", "/", "%"].includes(lastChar)) {
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else if (resultInput.value !== "") {
        resultInput.value += operator;
    }
}

function clearResult() {
    resultInput.value = "";
}

function deleteLastChar() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Evaluasi ekspresi
        let expression = resultInput.value;
        // Ganti % dengan /100 jika ingin persentase
        expression = expression.replace(/%/g, "/100");
        let result = eval(expression);

        // Tampilkan hasil dengan maksimal 10 digit desimal
        resultInput.value = parseFloat(result.toFixed(10));
    } catch (error) {
        resultInput.value = "Error";
    }
}
