"use strict";
let Juan = {
    nombre: 'Juan',
    nota: 12
};
const pedro = {
    nombre: 'Pedro',
    nota: 3,
};
function imprimirNombre(name, nota) {
    let mensaje = '';
    if (nota > 10) {
        mensaje = 'felicidades aprovaste';
    }
    else {
        mensaje = 'Tienes que esforzarte mas';
    }
    return `${mensaje} ${name}`;
}
console.log(imprimirNombre(Juan.nombre, Juan.nota));
console.log(imprimirNombre(pedro.nombre, pedro.nota));
