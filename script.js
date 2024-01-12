let firstNumber
let secondNumber 
let step = 0
let operator
let result = 0

const numArray = []
const secondNumarray = []

const display = document.getElementById('display')

function getNumber(num){
    if(step === 0 || step === 1){
        numArray.push(num)
        step = 1
        firstNummber = Number (numArray.join('')) 
        display.value = firstNumber
    } else if (step === 2){
        secondNumAray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber
    }
}

function getOperator(op){
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

let num1 = '559'
let num2 = '232'
let operator1 = '+'
let total = ''


if(e.target.type === 'number'){
  // 5
  let value = e.target.value
  
  if(operator === ''){
    num1 += value
    display.innerText = num1
  }else{
    num2 += value
    display.innerText = num2
  }
}else if(e.target.type === 'operator'){
  let value = e.target.value
  operator = value
}