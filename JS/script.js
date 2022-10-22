//#region Variables
let valor_input_val = document.getElementById('valor_input'); //valor del input tipo texto
let num1 = document.getElementById('num1'); //variable num1
let num2 = document.getElementById('num2'); //variable num2
const myBtn = document.getElementById('btn'); //variable del boton
//#endregion

//#region Calculo Matematico que me tire un número random
//retorna un entero aleatorio del 0 al 9
num1.innerText = Math.floor(Math.random() * 10) //Remplaza num1 por x numero random del 0 al 9
num2.innerText = Math.floor(Math.random() * 10) //Remplaza num2 por x numero random del 0 al 9
    //#endregion
    //#region Evento
let number1 = num1.innerText; //creo variable para que guarden el valor que le di a num1
let number2 = num2.innerText; //creo variable para que guarden el valor que le di a num2
myBtn.addEventListener("click", () => { //con la constante de mi boton le añado un evento. addEventListener es para que cuando suceda una accion se active un evento
    let sum_result = parseInt(number1) + parseInt(number2); //Creo una variable que me haga la suma de number1 y number2
    let res = parseInt(valor_input.value) //Guardo el valor del input en mi variable resultado
    if (res == sum_result) { //Si resultado es igual a suma, me tira un alerta del navegador
        alert("Usted no es un robot");
        document.getElementById('parent').style.display = 'block'; //Al hacerlo me pone el display de mi parent en block para que se pueda ver
        document.getElementById('captcha').style.display = 'none'; //Y me pone en invisible el formulario para que no se vea

    } else {
        alert("Usted es un robot"); //Si le erras a la sumatoria te tira una alerta de que eres un robot

    }
});
//#endregion