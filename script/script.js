let output = document.getElementById('result');

function clearResult() {
    output.innerHTML = '';
}

function backSpace() {
    output.innerHTML = output.innerHTML.slice(0,-1) ;
}

function insert(digit) {
    length = output.innerText.length
    if (length >= 10) {
        alert("max length is 10")
        return
    }
    output.innerHTML += digit;
}

// eval translate output in a expression
function calculate() {
    output.innerHTML = eval(output.innerHTML);
}

function useKeyboard(event) {
    const keyDown = event.key
    const nums = [0,1,2,3,4,5,6,7,8,9]
    const operators = '+-*x/.' 
    if (keyDown === 'Backspace') {
        return backSpace()
    }
    if (keyDown === 'Enter') {
        return calculate()
    }
    if (keyDown in nums || operators.includes(keyDown)) {
        return insert(keyDown)
    }
}

document.addEventListener("keydown", useKeyboard)
