"use strict";
// Para este desafio se quiso probar algo diferente en ves de generar las estrellas con los metodos nativos de canvas, me tome el atrevimiento
// de usar una libreria de javascript externa para interactuar con el canvas (Two.js  https://two.js.org/), creame que fue bastante dificil como principiante aprender a implementarla
// y quizas me genero las estrellas de una forma mas perfecta y facil que si las hubiera hecho a mano pero me costo bastante saber como funcionaba y como implementar las formas, en fin
// lo quise tambien hacer para retarme a mi mismo y ver mi capacidad de ser auodidacta, espero que le impresione tanto como a miTren
// Pd: el motivo por el que hay dos canvas es porque la libreria de Two.js para trabajar con canvas crea nativamente el suyo asi que para no complicarme la Vida 
// en hacer una migracion simplemente lo acomode con absolute sobre el, espero que no haya problemitas+
// Dependencias usadas
// Typescript
// .bin 
// two.js 
const canvas = document.getElementById('tren');
// import Two from 'two.js'
// metodo para crear el objeto two 
const two = new Two({
    fullscreen: false,
    width: canvas === null || canvas === void 0 ? void 0 : canvas.width,
    height: canvas === null || canvas === void 0 ? void 0 : canvas.height,
    type: Two.Types.canvas,
});
// se hereda el two de un contenedor 
const main = document.getElementById('main');
two.appendTo(main);
// tenemos la etiqueta canvas en nuestro control 
const canv = document.getElementsByTagName('canvas')[1];
let punteadaColor = 'red';
let redondeadaColor = 'blue';
canv.classList.add('nubesitas');
// import { randomColor } from "./main";
class Elemento {
    constructor(contexto, color) {
        this._contexto = contexto;
        if (color) {
            this._color = color;
        }
        else {
            this._color = randomColor();
        }
    }
    get color_1() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get contexto() {
        return this._contexto;
    }
    set contexto(value) {
        this._contexto = value;
    }
}
class Estrella extends Elemento {
    constructor(contexto, color) {
        super(contexto, color);
        this.x = randomNumber(1, ((contexto === null || contexto === void 0 ? void 0 : contexto.canvas.width) - 2));
        this.y = randomNumber(1, ((contexto === null || contexto === void 0 ? void 0 : contexto.canvas.height) - 10));
    }
    // metodo para pintar una estrella en el dom de manera general se pueden asignar parametros como que tanto tendra su radio y sus lados 
    pintar(innerRadio, outRadio, sides = 5) {
        // lados por defecto de una estrellas 
        var _a, _b;
        this.x = randomNumber(1, (((_a = this.contexto) === null || _a === void 0 ? void 0 : _a.canvas.width) - 2));
        this.y = randomNumber(1, (((_b = this.contexto) === null || _b === void 0 ? void 0 : _b.canvas.height) - 10));
        const star = two.makeStar(this.x, this.y, innerRadio, outRadio, sides);
        star.fill = this.color;
        star.linewidth = 4;
        if (!!this.color_1)
            star.fill = this.color_1;
    }
}
// EstrellaRedonda y otra con el nombre EstrellaPunteada
class EstrellaPunteada extends Estrella {
    constructor(contexto, color) {
        super(contexto, color);
    }
    pintarPunteada() {
        this.pintar(23, 10);
        punteadaColor = this.color_1;
    }
}
class EstrellaRedonda extends Estrella {
    constructor(contexto, color) {
        super(contexto, color);
    }
    pintarRedonda() {
        this.pintar(27, 21, 6);
        redondeadaColor = this.color_1;
    }
}
class Sky extends Elemento {
    constructor(contexto, color) {
        super(contexto, color);
    }
    paintSky(estPunt, estCirc, maxStars) {
        if (!maxStars)
            maxStars = 15;
        for (let index = 0; index < randomNumber(1, maxStars); index++) {
            canvas.style.backgroundColor = this.color_1;
            estPunt.pintarPunteada();
            estCirc.pintarRedonda();
        }
    }
}
// variable vincularla con la logica del boton para agregar estrellas 
let itsStarToggle = true;
const button = document.getElementById('botones');
const two2 = new Two({
    fullscreen: false,
    width: 50,
    height: 50,
    type: Two.Types.svg,
});
const botonStarMedidas = {
    x: 25,
    y: 25,
    inner: 23,
    out: 10,
    sides: 5,
};
let estrellita1 = two2.makeStar(botonStarMedidas.x, botonStarMedidas.y, botonStarMedidas.inner, botonStarMedidas.out, botonStarMedidas.sides);
estrellita1.fill = 'black';
two2.update();
// evento y condicional para cambiar la logica del boton al colocar las estrellas en el tren 
button.addEventListener('click', () => {
    itsStarToggle = !itsStarToggle;
    if (itsStarToggle) {
        two2.remove(estrellita1[0]);
        estrellita1 = two2.makeStar(botonStarMedidas.x, botonStarMedidas.y, botonStarMedidas.inner, botonStarMedidas.out, botonStarMedidas.sides);
        estrellita1.fill = 'black';
        two2.update();
    }
    else {
        two.remove(estrellita1[0]);
        estrellita1 = two2.makeStar(botonStarMedidas.x, botonStarMedidas.y, 27, 21, botonStarMedidas.sides + 1);
        estrellita1.linewidth = 2;
        estrellita1.fill = 'white';
        two2.update();
    }
});
two2.appendTo(button);
const vertexSize = 12;
const vertexOutLineSize = vertexSize / 4;
const vertexGroup = two.makeGroup();
const estrelli = new EstrellaPunteada(canv.getContext('2d'), randomColor());
const estRedonda = new EstrellaRedonda(canv.getContext('2d'), randomColor());
const sky = new Sky(canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d'), randomColor());
sky.paintSky(estrelli, estRedonda, 13);
let option = 'punteada';
canv.onclick = (event) => {
    const vertices = vertexGroup.children;
    let x = event.offsetX;
    let y = event.offsetY;
    console.log({ y, x });
    let vertex;
    if (itsStarToggle) {
        vertex = two2.makeStar(x, y, 23, 10, 5);
        vertex.fill = punteadaColor;
    }
    else {
        vertex = two2.makeStar(x, y, 30, 20, 6);
        vertex.fill = redondeadaColor;
    }
    // x and y postion of the click event
    // 
    // vertex.fill = '#9911ff'
    vertex.linewidth = vertexOutLineSize;
    // if(vertices.length > 1){
    //     createEdge(x,y, vertices)
    // }
    vertexGroup.add(vertex);
};
class Tren {
    constructor(nombre) {
        this._nombre = 'tren';
        if (nombre)
            this._nombre = nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    pintar() {
        if (canvas.getContext) {
            let dimension = canvas.getContext('2d');
            if (!(dimension = canvas.getContext("2d"))) {
                throw new Error(`2d context not supported or canvas already initialized`);
            }
            dimension.fillStyle = randomColor();
            dimension.fillRect(100, 245, 450, 30);
            this.square(120, 200, 90, randomColor());
            this.square(260, 200, 90, randomColor());
            this.square(400, 200, 90, randomColor());
            this.circle(165, 310, 40, randomColor());
            this.circle(305, 310, 40, randomColor());
            this.circle(445, 310, 40, randomColor());
            dimension.fillStyle = randomColor();
            dimension.fillRect(540, 80, 180, 210);
            dimension.fillStyle = randomColor();
            dimension.fillRect(520, 30, 220, 50);
            this.square(585.5, 120, 90, randomColor());
            this.circle(635, 290, 65, randomColor());
            this.square(720, 139, 150, randomColor());
            this.square(780, 89, 50, randomColor());
            dimension.fillStyle = randomColor();
            dimension.fillRect(755, 35, 100, 55);
            this.circle(755, 315, 34, randomColor());
            this.circle(830, 315, 34, randomColor());
            this.triangle(870, 194, 95, randomColor());
            this.hex(138, 110, randomColor());
            this.pent(305, 110, randomColor());
            this.oct(427, 110, randomColor());
            dimension.font = '20px sans-serif';
            dimension.fillStyle = 'white';
            dimension.fillText(this.nombre, 770, 210);
        }
    }
    square(x, y, size, color) {
        let dimension = canvas.getContext('2d');
        if (dimension != null) {
            dimension.beginPath();
            dimension.moveTo(x, y);
            dimension.lineTo((x + size), y);
            dimension.lineTo((x + size), (y + size));
            dimension.lineTo(x, (y + size));
            dimension.fillStyle = color;
            dimension.closePath();
            dimension.fill();
            dimension.stroke();
        }
    }
    circle(x, y, size, color) {
        let dimension = canvas.getContext('2d');
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath();
        dimension.arc(x, y, size, 0, Math.PI * 2);
        dimension.closePath();
        dimension.fillStyle = color;
        dimension.fill();
        dimension.stroke();
    }
    triangle(x, y, size, color) {
        let dimension = canvas.getContext('2d');
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath();
        dimension.moveTo(x, y);
        dimension.lineTo(x, (y + size));
        dimension.lineTo((x + size), (y + size));
        dimension.fillStyle = color;
        dimension.closePath();
        dimension.fill();
        dimension.stroke();
    }
    hex(x, y, color) {
        let dimension = canvas.getContext('2d');
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath();
        dimension.moveTo(x, y);
        dimension.lineTo((x - 30), (y + 45));
        dimension.lineTo(x, (y + 90));
        dimension.lineTo((x + 55), (y + 90));
        dimension.lineTo((x + 85), (y + 45));
        dimension.lineTo((x + 55), y);
        dimension.fillStyle = color;
        dimension.closePath();
        dimension.fill();
        dimension.stroke();
    }
    pent(x, y, color) {
        let dimension = canvas.getContext('2d');
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath();
        dimension.moveTo(x, y);
        dimension.lineTo((x - 45), (y + 40));
        dimension.lineTo((x - 25), (y + 90));
        dimension.lineTo((x + 30), (y + 90));
        dimension.lineTo((x + 45), (y + 40));
        dimension.fillStyle = color;
        dimension.closePath();
        dimension.fill();
        dimension.stroke();
    }
    oct(x, y, color) {
        let dimension = canvas.getContext('2d');
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath();
        dimension.moveTo(x, y);
        dimension.lineTo((x - 30), (y + 30));
        dimension.lineTo((x - 30), (y + 60));
        dimension.lineTo(x, (y + 90));
        dimension.lineTo((x + 40), (y + 90));
        dimension.lineTo((x + 70), (y + 60));
        dimension.lineTo((x + 70), (y + 30));
        dimension.lineTo((x + 40), y);
        dimension.fillStyle = color;
        dimension.closePath();
        dimension.fill();
        dimension.stroke();
    }
}
let miTren = new Tren();
// miTren.nombre = 'juan'
miTren.pintar();
document.getElementById('avanzar').addEventListener('click', () => {
    let counter = 0;
    const timer = setInterval(() => {
        counter++;
        document.getElementById('velocidad').textContent = `has recorrido ${counter} metros`;
        if (canvas)
            canvas.style.left = `${counter * 2}px`;
        canv.style.left = `${counter * 2}px`;
        if (counter == 25)
            clearInterval(timer);
    }, 1000);
    console.log(timer);
    const api = 'https://api.github.com/users/CH19';
    fetch(api).then(response => { if (response.ok)
        return response.json(); })
        .then(json => {
        var _a, _b;
        console.log(json);
        (_a = document.getElementById('imageCH19')) === null || _a === void 0 ? void 0 : _a.setAttribute('src', json === null || json === void 0 ? void 0 : json.avatar_url);
        (_b = document.getElementById('linkName')) === null || _b === void 0 ? void 0 : _b.setAttribute('href', json === null || json === void 0 ? void 0 : json.html_url);
    });
});
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor() {
    // let colors = ['pink','gray', 'orange', 'blue', 'red', 'lightblue', 'purple', 'bisque', 'green', 'lightgreen', 'yellow', 'brown']
    // return colors[Math.floor(Math.random() * colors.length)]
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * (letters.length - 1))];
    }
    return color;
}
