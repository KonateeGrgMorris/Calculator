let firstNumber
let secondNumber 
let step = 0
let operator
let result = 0

const numArray = []
const secondNumarray = []

const display = document.getElementById('display')
console.log(display)
function getNumber(event){
    console.log(event.target.getAttribute("value"))
    const num = event.target.getAttribute("value")
    console.log(display.value)
    display.value = num
    // if(step === 0 || step === 1){
    //     numArray.string(num)
    //     step = 1
    //     firstNummber = Number (numArray.join('')) 
    //     display.value = firstNumber
    // } else if (step === 2){
    //     secondNumAray.push(num)
    //     secondNumber = Number(secondNumArray.join(''))
    //     display.value = secondNumber
    // }
}

function getOperator(event){
    
    step = 2
    operation = op
}

function clearOperator(){
    display.value = 0
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumber = []
}

const calculateEquals = () =>{
    if(operator === '+'){
        result = firstNumber + secondNumber
        display.value = result
    }else if (operation === '-'){
        result = firstNumber - secondNumber
        display.value = result
    }else if (operation === '+'){
        result = firstNumber * secondNumber
        display.value = result
    }else if (operation === '/'){
        result = firstNumber / secondNumber
        display.value = result
    }
}