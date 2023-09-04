"use strict";
(() => {
    // probando nuestra primera clase en ts son como en java 
    class persona {
        constructor(name, age, lastName) {
            this._name = '';
            this.lastName = '';
            this.age = 0;
            this._name = name;
            this.age = age;
            if (lastName) {
                this.lastName = lastName;
            }
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        mostrarInformacion() {
            console.log('Bienvenido de nuevo ' + this._name);
        }
    }
    const chris = new persona('christian', 19);
    chris.mostrarInformacion();
    chris.name = 'Pedro';
    console.log('mi nombre es ' + chris.name);
    chris.mostrarInformacion();
})();
