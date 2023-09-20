"use strict";
// import Two from 'two.js'
const two3 = new Two({
    fullscreen: false,
    width: (canvas === null || canvas === void 0 ? void 0 : canvas.height) + 300,
    height: (canvas === null || canvas === void 0 ? void 0 : canvas.width) / 1.5,
    type: Two.Types.canvas,
});
// se obtiene el id del div planteado en el html para ser el contenedor del edificio 
const edificioContainer = document.getElementById('edificio');
// se hereda con two.appento el canvas del objeto two en el div edificio 
two3.appendTo(edificioContainer);
// se obtiene la data del canvas para ponerle una clase e interactuar mas con el 
const edificio = document.getElementsByTagName('canvas')[2];
edificio.classList.add('edificio');
// se crea la lase abstracta figura con el metodo pintar
class Figura {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
}
// clase ventana heredada de Figura, se inicializan los datos para posteriormente escribirlos 
class Ventana extends Figura {
    constructor(positionX, positionY, tamanno) {
        super(positionX, positionY);
        this.tamanno = 0;
        this.comMarco = Math.random() < .5;
        this.luzEncendida = Math.random() < .5;
        this.tamanno = tamanno * .5;
        this.pintar();
    }
    pintar() {
        const ventanita = two3.makePolygon(this.positionX, this.positionY, this.tamanno, 4);
        ventanita.fill = this.luzEncendida ? 'yellow' : 'black';
        if (this.comMarco) {
            ventanita.stroke = '#FFF';
            ventanita.linewidth = this.tamanno / 8;
        }
        two3.update();
    }
}
// se hereda de figura y se crea la clase Piso 
class Piso extends Figura {
    constructor(posicionX, posicionY, ancho, color) {
        super(posicionX, posicionY);
        this._nroVentanas = randomNumber(1, 5);
        this.ancho = 0;
        this.color = '';
        this.ancho = ancho;
        this.color = color;
        this.pintar();
    }
    pintar() {
        const pisito = two3.makeRectangle(this.positionX, this.positionY, this.ancho, Piso._alto);
        pisito.fill = this.color;
        let position = this.positionX;
        const tamanoVentana = (this.ancho / 3.8) / this.nroVentanas;
        console.log('ancho', Math.sqrt(Piso.alto));
        console.log(position);
        // se utiliza el ciclo for para crear una nueva ventana dependiendo del numero seleccionado 
        for (let index = 0; index < this.nroVentanas; index++) {
            const ventana2 = new Ventana(position, this.positionY, tamanoVentana);
            // valor que se usa para separar las ventanas
            position -= tamanoVentana * 2;
            console.log(position);
        }
        console.log(this.ancho);
        two3.update();
    }
    get nroVentanas() {
        return this._nroVentanas;
    }
    set nroVentanas(value) {
        this._nroVentanas = value;
    }
    static get alto() {
        return Piso._alto;
    }
}
Piso._alto = 140;
class Edificio extends Figura {
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    constructor(posicionX, posicionY, nombre) {
        super(posicionX, posicionY);
        this.nmrPisos = 0;
        this.ancho = randomNumber(100, two3.width);
        this._nombre = '';
        this.nombre = nombre;
        this.nmrPisos = randomNumber(1, 4);
        this.color = randomColor();
        this.pintar();
    }
    pintar() {
        let posicion = this.positionY;
        for (let index = 0; index < this.nmrPisos; index++) {
            let newPiso = new Piso(this.positionX, posicion, this.ancho, randomColor());
            posicion -= Piso.alto;
        }
        two3.makeText(this.nombre, this.positionX, posicion, { size: 30 });
        two3.update();
        console.log('posicion', posicion);
    }
}
// Se coloca la informacion en el HTML 
(() => {
    // se coloca como width el ancho de canvas - 5 para que quepa completo 
    changeBuildingName();
    console.log(two3.width);
})();
function changeBuildingName() {
    //    funccion para la creacion del edificio se hace uso del sesion Storage para que al momento de recargar la pagina el usuario pueda usar 
    //    los datos ya puestos del nombre del edificioContainer, si el usuario desea cambiar de nombre tambien se tiene otra opccion 
    window.addEventListener('load', () => {
        const buildingName = document.getElementById('buildingName');
        buildingName === null || buildingName === void 0 ? void 0 : buildingName.children[2].addEventListener('click', () => {
            window.sessionStorage.removeItem('name');
            buildingName.children[0].style.display = 'block';
            buildingName.children[1].style.display = 'block';
            location.reload();
        });
        if (window.sessionStorage.getItem('name')) {
            buildingName.children[0].style.display = 'none';
            buildingName.children[1].style.display = 'none';
            buildingName === null || buildingName === void 0 ? void 0 : buildingName.children[2].style.display = 'block';
            let name = window.sessionStorage.getItem('name');
            return new Edificio(randomNumber(0, two3.width), two3.height - 100, `Edificio ${capitalizar(String(window.sessionStorage.getItem('name').replace(/['"]+/g, '')))}`);
        }
        buildingName === null || buildingName === void 0 ? void 0 : buildingName.children[1].addEventListener('click', () => {
            var _a;
            const name = (_a = buildingName.children[0]) === null || _a === void 0 ? void 0 : _a.value;
            const newEdicio = new Edificio(randomNumber(0, two3.width), two3.height - 100, `Edificio ${capitalizar(String(name))}`);
            buildingName.children[0].value = '';
            buildingName.children[0].style.display = 'none';
            buildingName.children[1].style.display = 'none';
            buildingName.children[2].style.display = 'block';
            window.sessionStorage.setItem('name', JSON.stringify(name));
        });
    });
}
function capitalizar(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}
