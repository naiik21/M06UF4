// Ex1 
function divisible(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve('Es divisible');
        } else {
            reject('No es divisible');
        }
    });
}

divisible(10)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

// Ex2
const del1al10 = (valor) => {
    return new Promise((resolve, reject) => {
        const num = 5;

        if (num >= 0 && num <= 10) {
            resolve('Es un numero del 0 al 10');
        } else {
            reject('No es un numero del 0 al 10');
        }
    })
};

let valor = del1al10(5)
valor
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

// Ex3
function esVocal(lletre) {
    let arr = ['a', 'e', 'i', 'o', 'u']
    return new Promise((resolve, reject) => {
        if (arr.includes(lletre)) {
            resolve('Es vocal');
        } else {
            reject('No es vocal');
        }
    });
}

divisible("a")
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

// Ex4
function divisio(dividen, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor != 0) {
            result = dividen / divisor;
            resolve("Resultat: " + result);
        } else {
            reject("Error: el divisor no pot ser 0")
        }
    })
}

let dividend = 10;
let divisor = 2;

divisio(dividend, divisor)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
