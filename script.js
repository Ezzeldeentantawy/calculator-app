document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            display.innerText += number.id;
        })
    })
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            if (operator.id === "clear") {
                display.innerText = "";
            } else if (operator.id === "equals") {
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = "Error";
                }
            }else if(operator.id === "backSpace"){
                display.innerText = display.innerText.slice(0, -1); 
            } else {
                display.innerText += operator.id;
            }
        })
    })
});

