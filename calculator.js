let includesDecimal = false;
let answer;
let num1;
let num2;
let enterNum = "";

let btn1 = document.getElementById("num1");
let btn2 = document.getElementById("num2");
let btn3 = document.getElementById("num3");
let btn4 = document.getElementById("num4");
let btn5 = document.getElementById("num5");
let btn6 = document.getElementById("num6");
let btn7 = document.getElementById("num7");
let btn8 = document.getElementById("num8");
let btn9 = document.getElementById("num9");
let btn0 = document.getElementById('num0');

let btnClear = document.getElementById("clear");
let btnPosNeg = document.getElementById("posNeg");
let btnPercent = document.getElementById("percent");
let btnSubtract = document.getElementById("subtract");
let btnAdd = document.getElementById("addition");
let btnMultiply = document.getElementById("multiply");
let btnDivide = document.getElementById("division");
let btnClearError = document.getElementById("clearError");
let btnDecimal = document.getElementById("decimal");
let btnEquals = document.getElementById("equals");

let isAdd = false;
let isDivide = false;
let isSubtract = false;
let isMultiply = false;
let isNegative = false;

function divideNums(num1,num2) {
    let result;
    isDivide = true;
    if (num2 == 0) {
        result = "Cannot divide by 0!";
    }
    else {
        result = num1 / num2;
    }
    return result;
}

function addNums(num1, num2) {
    let result;
    isAdd = true;
    result = num1 + num2;
    return result;
}

function subtractNums(num1,num2) {
    let result;
    isSubtract = true;
    result = num1 - num2;
    return result;
}

function multiplyNums(num1,num2) {
    let result;
    isMultiply = true;
    result = num1 * num2;
    return result;
}

function operate(num1, num2) {
    let result;
    result = 0;
    if (isAdd == true) {
        result = addNums(num1, num2);
        isAdd = false;
    } else if (isDivide == true) {
        result = divideNums(num1,num2);
        isDivide = false;
    } else if (isSubtract == true) {
        result = subtractNums(num1, num2);
        isSubtract = false;
    } else if (isMultiply = num1, num2) {
        result = multiplyNums(num1, num2);
        isMultiply = false;
    } else {
        result = num1;
    }
    result = Number(result.toFixed(9));
    num1 = result;
    num2 = undefined;
    document.getElementById("display").innerText = result;
    return result;
}

function clear () {
    includesDecimal = false;
    answer = 0;
    num1 = 0;
    num2 = undefined;
    enterNum = "";
    isNegative = false;
    document.getElementById("display").innerText = 0;
}

function clearError () {
    enterNum = "";
    document.getElementById("display").innerText = enterNum;
}


document.getElementById('clear').addEventListener("click", ()=> clear());

document.getElementById('clearError').addEventListener("click", ()=> clearError());

document.getElementById('num1').addEventListener("click", function(){
    enterNum+="1";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num2').addEventListener("click", ()=> {
    enterNum += "2";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num3').addEventListener("click", ()=> {
    enterNum += "3";
    document.getElementById("display").innerText = enterNum;
    
});
document.getElementById('num4').addEventListener("click", ()=> {
    enterNum += "4";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num5').addEventListener("click", ()=> {
    enterNum += "5";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num6').addEventListener("click", ()=> {
    enterNum += "6";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num7').addEventListener("click", ()=> {
    enterNum += "7";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num8').addEventListener("click", ()=> {
    enterNum += "8";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num9').addEventListener("click", ()=> {
    enterNum += "9";
    document.getElementById("display").innerText = enterNum;
});
document.getElementById('num0').addEventListener("click", ()=> { 
    enterNum += "0";
    document.getElementById("display").innerText = enterNum;
});

document.getElementById('addition').addEventListener("click", function() {
    if (num2 == undefined) {
        num1 = Number(enterNum);
    } else {
        num2 = Number(enterNum);
    }
    enterNum = "";
    isAdd = true;
    isNegative = false;
})

document.getElementById('equals').addEventListener("click", function() {
    num2 = Number(enterNum);
    answer = operate(num1, num2);
    num1 = answer;
    isNegative = false;
} )

document.getElementById('subtract').addEventListener("click", function() {
    if (num2 == undefined) {
        num1 = Number(enterNum);
    } else {
        num2 = Number(enterNum);
    }
    enterNum = "";
    isSubtract = true;
    isNegative = false;
})
document.getElementById('division').addEventListener("click", function() {
    if (num2 == undefined) {
        num1 = Number(enterNum);
    } else {
        num2 = Number(enterNum);
    }
    enterNum = "";
    isDivide = true;
    isNegative = false;
})
document.getElementById('multiply').addEventListener("click", function() {
    if (num2 == undefined) {
        num1 = Number(enterNum);
    } else {
        num2 = Number(enterNum);
    }
    enterNum = "";
    isMultiply = true;
    isNegative = false;
})

document.getElementById('percent').addEventListener("click", () => alert("Feature is not implemented!"));

document.getElementById('posNeg').addEventListener("click", ()=> {
    if (isNegative == false) {
        enterNum = "-"+enterNum;
        isNegative = true;
    }
});

document.getElementById('decimal').addEventListener("click", function() {
    if (enterNum.includes(".", 0) == false) {
        enterNum += ".";
    }
})
