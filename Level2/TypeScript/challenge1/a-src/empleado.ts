interface Empleado {
    nombre: String,
    montoVentas: number,
    tiempo: number,
    sueldoBase: number,
}
const Christian: Empleado = {
    nombre: 'Christian',
    montoVentas: numRandom(200, 800),
    tiempo: numRandom(1,10),
    sueldoBase:  numRandom(500, 1000),
}
const Juan: Empleado = {
    nombre: 'Juan',
    montoVentas: numRandom(200, 800),
    tiempo: numRandom(1,10),
    sueldoBase: numRandom(500, 1000),
}
const Fabian: Empleado = {
    nombre: 'Fabian',
    montoVentas: numRandom(200, 800),
    tiempo: numRandom(1,10),
    sueldoBase:  numRandom(500, 1000),

}
const Empleados: (Empleado)[] = [Christian, Juan, Fabian]

for (const empleado of Empleados) {
    console.log(`el sueldo final de ${empleado.nombre} 
    sueldo base: ${empleado.sueldoBase}
    tiempo: ${empleado.tiempo}
    monto ventas: ${empleado.montoVentas}
    es ${calcSueldo(empleado)}`);
}
function calcSueldo(emp: Empleado): number
{
    const porcentajeVentas = emp.montoVentas * .3;
    const añosServicio = emp.sueldoBase * (emp.tiempo * Math.pow(10, -2));
    return Number( ( emp.sueldoBase + porcentajeVentas + añosServicio).toFixed(2));
}

function numRandom(min: number, max: number):number {
    return Math.floor((Math.random() * (max - min + 1)) + min);

}