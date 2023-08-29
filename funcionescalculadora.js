
// Funcion concatenar valor

document.addEventListener('DOMContentLoaded', function() {

    let inputs = document.querySelectorAll('.num');
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function() {

            document.calculadora.ans.value += this.value;
        });
    }
});

// Funcion Invertir 


document.addEventListener('DOMContentLoaded', function() {

    const botonActivarDesactivar = document.getElementById("activarDesactivar");
    const inputs = document.querySelectorAll(".hey");
    
    
    let inputsActivados = true;
    
    
    function toggleInputs() {
        inputsActivados = !inputsActivados; 
    
       
        inputs.forEach(input => {
            input.disabled = !inputsActivados;
        });
    
       
        botonActivarDesactivar.textContent = inputsActivados ? "Inv" : "Inv";
    }
    
    
    botonActivarDesactivar.addEventListener("click", toggleInputs);
    });
    
    

// Funciones Factoriales

const fac = (x) => {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}


// Funciones Trigonometricas


const sin = (x) => {
    return Math.sin(x);
}

const cos = (x) => {
    return Math.cos(x);
}
 
const tan = (x) => {
    return Math.tan((x * Math.PI) / 180)
}

const arcsin = (x) => {
    return Math.asin(x);
    
}

const arccos = (x) => {
    return Math.acos(x);
}

const arctan = (x, y) => {
    return Math.atan(x / y)
}

// Funcion Raiz


const root = (x) => {
    return Math.sqrt(x);
}


// Funciones Logaritmicas 

const log = (x) => {
    return Math.log10(x);
}

const ln = (x) => {
    return Math.log(x);
}

const eR = (x) => {
    e**(x);
}

const e10 = (x) => {
    10**(x);
}

// Funciones Exponenciales

const E = (x) => {
    Math.exp(x);
}

const e = Math.E;

const π = Math.PI;

// ANS

let ans = 0;

function Ans(x) {
     return ans += x;
}


  
  


 
