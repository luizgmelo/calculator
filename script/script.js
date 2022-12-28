let output = document.getElementById('result');

function clearResult(){
    output.innerHTML = '';
}

function insert(digit) {
    output.innerHTML += digit;
}

// eval translate output in a expression
function calculate() {
    output.innerHTML = eval(output.innerHTML);
}
