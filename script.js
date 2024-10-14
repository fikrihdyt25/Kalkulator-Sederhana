// Fungsi untuk menambahkan angka atau operator ke layar
// Fungsi untuk menambahkan angka atau operator ke layar
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Fungsi untuk membersihkan layar
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fungsi untuk menghapus karakter terakhir
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk menghitung hasil
function calculate() {
    try {
        const display = document.getElementById('display');
        let expression = display.value;
        
        // Mengganti operator perkalian dan pembagian
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        
        let result = eval(expression);
        
        // Membulatkan hasil ke 8 angka desimal jika perlu
        result = Number(result.toFixed(8));
        
        display.value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Fungsi untuk memvalidasi input
function validateInput(input) {
    const validChars = /^[0-9+\-*/.()]+$/;
    return validChars.test(input);
}

// Menambahkan event listener untuk input keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (validateInput(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    }
});
