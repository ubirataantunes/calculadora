function writeNumber(elementoId) {
    var output = document.getElementById("input");
    if (output.value == '0' || output.value == 'Syntax error') {
        output.value = elementoId.textContent;
    } else {
        output.value += elementoId.textContent;
    }
}

function clearTxt() {
    var output = document.getElementById("input").value = '0';
    document.getElementById("point").disabled = false;
}

function setOperator(elementoId) {
    var output = document.getElementById("input");
    if (output.value == 'Syntax error') {
        output.value = 0 + elementoId.textContent;
    } else {
        output.value += elementoId.textContent;
    }
    document.getElementById("point").disabled = false;
}
function dec(elementoId, status) {
    var output = document.getElementById("input");
    output.value += elementoId.textContent;
    document.getElementById("point").disabled = status;
}
function clearCh() {
    var output = document.getElementById("input");
    if (output.value == '0' || output.value == 'Syntax error' || output.value.length == 1) {
        output.value = 0;
        document.getElementById("point").disabled = false;
    } else {
        output.value = output.value.substring(0, output.value.length - 1);
    }
}

function calculator() {
    try {
        var output = document.getElementById("input");
        var result = eval(output.value);
        output.value = result;
    } catch (e) {
        output.value = 'Syntax error';
    } 
}