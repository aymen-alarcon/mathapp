function close() {
    if (confirm("do you really want to close it") == true) {
        window.close();
    }  
}

let n1 = document.getElementById('op1');
let c1 = document.getElementById('op2');
let nc1 = document.getElementById('op3');
let result = document.getElementById('result');
let op = document.querySelectorAll('.op');

function clear1() {
    n1.value = "";
    n1.focus();
}

function clear2() {
    c1.value = "";
    c1.focus();
}

function clear3() {
    nc1.value = "";
    nc1.focus();
}

function clearall() {
    for (let index = 0; index < op.length; index++) {
        op[index].value = "";    
        result.value = "";   
    }
    n1.focus();
}

function add() {
    let sum = 0;
    for (let index = 0; index < op.length; index++) {
        sum += parseFloat(op[index].value);
    }
    result.value = sum;
    n1.focus();
}

function x() {
    let product = 1;
    for (let index = 0; index < op.length; index++) {
        product *= parseFloat(op[index].value);
    }
    result.value = product;
    n1.focus();
}

function devide() {
    let devide = parseFloat(op[0].value);
    for (let index = 1; index < op.length; index++) {
        devide /= parseFloat(op[index].value);
    }
    result.value = devide;
    n1.focus();
}

function moyenne() {
    let moy = 0;
    for (let index = 0; index < op.length; index++) {
        moy += parseFloat(op[index].value);
    }
    moy /= op.length;
    result.value = moy;
    n1.focus();
}
