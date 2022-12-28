let output = document.getElementById('result');

function clearResult() {
    output.innerHTML = '';
}

function backSpace() {
    output.innerHTML = output.innerHTML.slice(0,-1) ;
}

function insert(digit) {
    output.innerHTML += digit;
}

// eval translate output in a expression
function calculate() {
    output.innerHTML = eval(output.innerHTML);
}
