// 1. Definir una interfaz que contega el nombre y la nota de un alumno
// 2. Declare 2 variables que almacenen valores de la interface
// 3. Pasar por parámetro a una función 2 parámetros del tipo de la interface
// 4. Llamar la función 
interface Alumno{
    nombre: String,
    nota: number,
}

let Juan: Alumno = {
    nombre:'Juan',
    nota: 12
}
const pedro: Alumno = {
    nombre: 'Pedro',
    nota: 3,
}

function imprimirNombre(name: String, nota: number): string{
    let mensaje: String = '';
    if(nota > 10){
        mensaje = 'felicidades aprovaste';
    }else{
        mensaje = 'Tienes que esforzarte mas';
    }
    return `${mensaje} ${name}`;
}
console.log(imprimirNombre(Juan.nombre, Juan.nota));
console.log(imprimirNombre(pedro.nombre, pedro.nota));