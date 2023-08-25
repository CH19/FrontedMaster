// Problema 
// Analizar el siguiente problema y crear el algoritmo en base al siguiente enunciado:
//  Se tiene de un alumno de bachillerato las notas de cada lapso. Cada nota está comprendida entre 0 y 20 pts. La nota 
//  final de grado se obtiene haciendo un promedio de las notas de lapso. Si se tiene como entrada las notas de 1er lapso, 
//  2do lapso y 3er lapso, calcule y muestre: - Nota final del estudiante. - Indicar si el alumno aprobó al obtener una nota 
//  final mayor o igual a 10, en caso contrario indicar que reprobó. (Use unicamente Selectiva Simple). - Mostrar un mensaje 
//  felicitando al alumno si obtiene una nota de 19 o 20 pts (Emplee únicamente 1 expresión lógica). - Mostrar un mensaje 
//  invitándolo a que se esfuerce más si obtiene una nota de 7 o menos. 

let notas = []
let materias = 3
for (let index = 0; index <= materias; index++) {
    notas.push(Math.floor(Math.random() * 20))
}
const notasPromedio = Math.floor(notas.reduce((accumulator, currentValue) => accumulator + currentValue) / materias);
console.log(notasPromedio);
const algo = document.getElementById('alumno');
if(algo){
    notasPromedio >= 10 ?  algo.innerText = 'El alumno aprobo' :  notasPromedio < 10 ? algo.innerText = 'El alumbo reprobo esfuerzate más' : console.error('elemento no encontrado');
}
console.log(notasPromedio);