// El ingreso de un vendedor está determinado por: su sueldo base, el monto mensual de sus vtas y un bono en caso de ser de 3era edad. 
// El porcentaje de la comisión por vtas se determina en base a la siguiente tabla: MONTO VENDIDO % Más de 0 y menor a Bs. 75000 5 >= 90000 
// y <200000 7 >=300000 y <1000000 8 >= 1500000 10 otro mto fuera de rango 6 Si la persona es de tercera edad se le debe pagar un bono de
//  adulto mayor de 40000 Bs. Tercera edad: [M]ujeres de 55 años o más [[H]ombres de 60 años o más 

let trabajador = {
    sueldoBase: 200,
    numVtas: 78000,
    edad: 23,
    comision: 0,
    genero: 'M',
    bono: 0,
};
let porcentaje = 0;
trabajador.comision = calcComision(trabajador.comision);
console.log(trabajador);
trabajador.bono = bonoTerceraEdad(trabajador.edad, trabajador.genero);
console.log(trabajador);
const sueldo = sueldoFinal(trabajador.sueldoBase, trabajador.bono, trabajador.comision);
console.log(sueldo);
function calcComision(numVtas: number): number{
    if(numVtas > 0 && numVtas < 75000){
        return 5;
    }else if(numVtas >= 90000 && numVtas < 200000 ){
        return 7;
    }else if(numVtas > 300000 && numVtas < 1000000){
        return 8;
    }else if( numVtas >= 1500000){
        return 10;
    }else{
        return 6;
    }
}
function bonoTerceraEdad(edad:number, genero:string): number{
    if((edad > 55 && genero === 'F') || (edad > 60 && genero === 'M')) return 40000;
    else return 0
}
function sueldoFinal(sueldobass: number, bonoTerceraEdad?: number, comision?: number): number{

    if(bonoTerceraEdad && comision){
       if(bonoTerceraEdad > 0 && comision < 0){
        return sueldobass + bonoTerceraEdad;
       }
        const porcentajeSueldo = sueldobass + bonoTerceraEdad / comision;
        return sueldobass + bonoTerceraEdad + (sueldobass * (porcentajeSueldo * .1));
    }
 
    else
        return sueldobass;
}