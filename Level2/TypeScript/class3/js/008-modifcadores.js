"use strict";
(() => {
    // cap 11 clases abstractas 
    // Actividad 
    // Cap 11.
    // +Crear una clase abstracta llamada OperacionBancaria con un atributo llamado precioProducto.
    // +Crear el contructor de esa clase y setear en el mismo el atributo.
    // + Definir un metodo abstracto llamado operacion con tipo de dato de retorno number.
    // +Crear una clase llamada Compra que extienda de OperacionBancaria
    // + Definir un atributo llamado saldoCliente.
    // +En el constructor inicializar todos los valores necesarios.
    // + Sobreescribir el metodo operacion como la reata de saldoCliente - precioProducto
    // +Intanciar un elemento de tipo Compra. Ejecutar el metodo operacion. (operacion deberia mostrar el resultado en consola
    class OperacionBancaria {
        constructor(precioProudcto) {
            this.precioProducto = precioProudcto;
        }
        operacion(saldo) {
            return saldo - this.precioProducto;
        }
    }
    class Compra extends OperacionBancaria {
        constructor(saldoCliente, precioProducto) {
            super(precioProducto);
            this.saldoCliente = 0;
            this.saldoCliente = saldoCliente;
        }
    }
    // cap 10 classes heredadas 
    class Persona {
        constructor(name, cedula) {
            this.name = '';
            this.cedula = '';
            this.name = name;
            this.cedula = cedula;
        }
        decirNombre() {
            console.log(`Hola mi nombre es ${this.name}`);
        }
    }
    // Cap 8.
    // Crear una clase llamada ClienteBancario.
    // Debe tener los siguientes atributos:
    // nombre, cedula, nombreBanco, saldo, claveSuiche.
    // Donde nombreBanco es de solo lectura.
    // saldo y claveSuiche son privados y tienen sus metodos.
    // +Hacer una instancia de la clase y establezca los valores de la instancia. 
    // Nota: Para el nombre del banco, establecerlo en la declaracion de la variable. 
    class ClienteBancario extends Persona {
        constructor(name, cedula, claveSuiche, saldo) {
            super(name, cedula);
            this.nombreBanco = 'Banco de Venezuela';
            this._saldo = 0;
            this._claveSuiche = '0';
            if (claveSuiche)
                this._claveSuiche = claveSuiche;
            if (saldo)
                this._saldo = saldo;
        }
        set saldo(newSaldo) {
            this._saldo = newSaldo;
        }
        get saldo() {
            return this._saldo;
        }
        set claveSuiche(newClaveSuiche) {
            this._claveSuiche = newClaveSuiche;
        }
        get claveSuiche() {
            return this._claveSuiche;
        }
    }
    const juan = new ClienteBancario('Juan', '31511780');
    juan.claveSuiche = '2323423';
    juan.saldo = 34;
    const pedro = new ClienteBancario('Pedro', '32543453', '343543', 43353);
    const christian = new ClienteBancario('Christian', '34535475', '3423', 6000);
    const clientes = [juan, pedro, christian];
    clientes.forEach(cliente => console.log(`Mi nombre es ${cliente.name} mi cedula es ${cliente.cedula} tengo ${cliente.saldo}$ y mi clave es ${cliente.claveSuiche}`));
    console.log('----');
    console.log(christian.decirNombre());
    const compra = new Compra(christian.saldo, 5000);
    console.log(`${christian.name} compro un producto por ${compra.precioProducto} con un saldo de ${christian.saldo} sus finanzas dieron un total de ${compra.operacion(compra.saldoCliente)}`);
})();
