class Calculator{
    constructor(previousTextElement, currentTextElement){
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }  
    clear(){
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined 

    }

    appendNumber(number){

    }

    operation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }

}


const numberButtons = document.querySelectorAll('[.number]')
const operatorButtons = document.querySelectorAll('[.operator]')
const equalButton = document.querySelectorAll('[.equal]')
const clearButton = document.querySelectorAll('[.clear]')
const previousTextElement = document.querySelectorAll('[.previousOperand]')
const currentTextElement = document.querySelectorAll('[.currentOperand]')

