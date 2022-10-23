//#region variables
let valor_input_val = document.getElementById('valor_input');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
const myBtn = document.getElementById('btn');
//#endregion variables

//#region numero random
num1.innerText = Math.floor(Math.random() * 10)
num2.innerText = Math.floor(Math.random() * 10)
//#endregion numero random

//#region evento
let number1 = num1.innerText;
let number2 = num2.innerText;
myBtn.addEventListener("click", () => {
    let sum_result = parseInt(number1) + parseInt(number2);
    let res = parseInt(valor_input.value)
    if (res == sum_result) {
        alert("Usted no es un robot");
        document.getElementById('parent').style.display = 'block';
        document.getElementById('captcha').style.display = 'none'; 

    } else {
        alert("Usted es un robot");

    }
});
//#endregion evento