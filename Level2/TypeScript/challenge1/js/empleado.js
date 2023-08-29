"use strict";
const Christian = {
    nombre: 'Christian',
    montoVentas: numRandom(200, 800),
    tiempo: numRandom(1, 10),
    sueldoBase: numRandom(500, 1000),
};
const Juan = {
    nombre: 'Juan',
    montoVentas: numRandom(200, 800),
    tiempo: numRandom(1, 10),
    sueldoBase: numRandom(500, 1000),
};
const Fabian = {
    nombre: 'Fabian',
    montoVentas: numRandom(200, 800),
    tiempo: numRandom(1, 10),
    sueldoBase: numRandom(500, 1000),
};
const Empleados = [Christian, Juan, Fabian];
for (const empleado of Empleados) {
    console.log(`el sueldo final de ${empleado.nombre} 
    sueldo base: ${empleado.sueldoBase}
    tiempo: ${empleado.tiempo}
    monto ventas: ${empleado.montoVentas}
    es ${calcSueldo(empleado)}`);
}
function calcSueldo(emp) {
    const porcentajeVentas = emp.montoVentas * .3;
    const añosServicio = emp.sueldoBase * (emp.tiempo * Math.pow(10, -2));
    return Number((emp.sueldoBase + porcentajeVentas + añosServicio).toFixed(2));
}
function numRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
