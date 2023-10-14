var displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function delete1() {
     displayValue = document.getElementById('result').value;
    document.getElementById('result').value = displayValue.slice(0, displayValue.length -1);
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('result').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key.match(/[0-9+\-*/.=]|Backspace/)) {
        if (key === '=' || key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            clearEntry();
        } else if (key === 'Delete') {
            clearDisplay();
        } 
        else {
            appendToDisplay(key);
        }
    }
});