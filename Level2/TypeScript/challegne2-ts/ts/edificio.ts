

// 1.- Crear una clase con el nombre Ventana que herede de la clase Figura, que tenga los atributos: tamaño (number), conMarco (boolean), luzEncendida (boolean). Sobre escribir el método "pintar", que debe pintar la ventana en la posición X,Y que tenga. El ancho y el alto se debe conseguir usando el atributo tamaño. El color de fondo dependerá de si la luz esta encendida (amarillo) 
// o no (negro). Si el atributo conMarco es true, la ventana debe tener un marco, de lo contrario no. En el constructor los valores de
//  los atributos "conMarco" y "luzEncendida" son opcionales y deben asignarse aleatoriamente si no se reciben

// 2.- Crear una clase con el nombre Piso que herede de la clase Figura, que tenga el atributo nroVentanas (number), ancho (number) y 
// alto (number). El alto debe ser un atributo Static y constante. En el constructor se debe recibir por parámetro el ancho, el color, 
// la posición X,Y, pero el atributo nroVentanas debe ser un número aleatorio. Sobre escribir el método "pintar", que debe pintar un 
// rectangulo usando la posición X,Y,
// y ese piso lo debe pntar del color que tenga el atributo color. Luego debe instanciar tantas ventanas como tenga el atributo 
// nroVentanas y llamar el método "pintar" de cada una. El tamaño de las ventanas debe calcularse en base al ancho del piso, de 
// modo tal que todas quepan (todas las ventanas deben tener el mismo tamaño y debe haber una pequeña separación entre estas).

// 3.- Crear la clase Edificio que herede de la clase Figura, que tenga los atributos nroPisos (number), ancho (number) y nombre 
// (string). El constructor debe recibir por parámetros: el nombre del edificio, el número de pisos, la posición X y la posición Y.
//  El color y el ancho se determinan de forma aleatoria.

// 4.- Sobre escribir el método pintar de la clase Edificio, que debe instanciar y dibujar tantos objetos de la clase Piso como número 
// de pisos tenga el edificio, enviando por parámetro al constructor de Piso: el color, el ancho y la posición X del edificio
// . El primer piso debe estar en la posición Y del edificio menos el alto de un piso, el sengundo piso debe estar en la posición 
// Y menos el alto de 2 pisos (this.Y - Piso.alto*i) y asi sucesivamente. Luego de pintar todos los pisos, se debe mostrar el nombre
//  del edificio (arriba del último piso)

// 5.- Crear un archivo HTML con un canvas que ocupe toda la página. Agregar un botón y programar el evento click del botón para que 
// ejecute una función que pida al usuario un nombre (usando prompt) y luego instancie un objeto de la clase Edificio, pasando por 
// parámetro al constructor el nombre del edificio (el que el usuario escribió), un número de pisos aleatorio, una posición X aleatoria,
//  la posición Y debe ser el borde inferior del canvas. Luego de instanciar el edificio debe ejecutar el método dibujar


// Se inicializa el objeto Two en este caso two3 porque es el tercero creado para obtener todos los metodos de Two.js incluyendo la creacion de un
// canvas para la creacion del edificio 

// import Two from 'two.js'

const two3 = new Two({
    fullscreen: false,
    width: canvas?.height + 300,
    height: canvas?.width / 1.5,
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
abstract class Figura{
    positionX: number;
    positionY: number
    constructor(positionX: number, positionY: number){
       this.positionX =positionX;
       this.positionY = positionY;
    }
    
    abstract pintar(): any;
}
// clase ventana heredada de Figura, se inicializan los datos para posteriormente escribirlos 
class Ventana extends Figura{
    
    tamanno: number = 0;
    comMarco: boolean = Math.random() < .5;
    luzEncendida: boolean = Math.random() < .5;
    constructor(positionX: number, positionY: number, tamanno: number){
        super(positionX, positionY)
        
        this.tamanno = tamanno * .5;
        this.pintar()
    }
 
    pintar() {
        // const ventanas = two3.makeGroup(
        // let position = this.postionX;
        // for (let index = 0; index <  nmroVentanas; index++) {
        //      
        //     position += 50;
        //     ventanas.add(ventana);

        // }    
        const ventanita = two3.makePolygon(this.positionX, this.positionY, this.tamanno, 4 );
        ventanita.fill = this.luzEncendida ? 'yellow' : 'black';
        if(this.comMarco) {
            ventanita.stroke = '#FFF';
            ventanita.linewidth = this.tamanno / 8;
        }
        two3.update()
    }
}
// 2.- Crear una clase con el nombre Piso que herede de la clase Figura, que tenga el atributo nroVentanas (number), ancho (number) y 
// alto (number). El alto debe ser un atributo Static y constante. En el constructor se debe recibir por parámetro el ancho, el color, 
// la posición X,Y, pero el atributo nroVentanas debe ser un número aleatorio. Sobre escribir el método "pintar", que debe pintar un 
// rectangulo usando la posición X,Y,

// se hereda de figura y se crea la clase Piso 
class Piso extends Figura{
    private _nroVentanas: number = randomNumber(1, 5);
    static readonly _alto: number = 140;
    ancho: number = 0;
    color: string = '';
    constructor(posicionX: number, posicionY: number,  ancho: number, color: string){
        super(posicionX, posicionY)
        this.ancho = ancho;
        this.color = color;
        this.pintar();
    }
    pintar() {

        const pisito = two3.makeRectangle(this.positionX, this.positionY, this.ancho, Piso._alto);
        pisito.fill = this.color
        let position = 350;
        const tamanoVentana =  (this.ancho / 3.8) / this.nroVentanas;
        console.log('ancho',Math.sqrt(Piso.alto));
        console.log(position);
        // se utiliza el ciclo for para crear una nueva ventana dependiendo del numero seleccionado 
        for (let index = 0; index < this.nroVentanas; index++) {            
            const ventana2 = new Ventana(position, this.positionY,tamanoVentana); 
            // valor que se usa para separar las ventanas
            position -=  tamanoVentana * 2;
            console.log(position);
        }
        // const ventana = new Ventana(300, this.posicionY, Piso.alto);

        console.log(this.ancho);
        two3.update()
    }
    public get nroVentanas(): number {
        return this._nroVentanas;
    }
    public set nroVentanas(value: number) {
        this._nroVentanas = value;
    }
    public static get alto(): number {
        return Piso._alto;
    }
 
    
}
class Edificio extends Figura{
    nmrPisos: number = 0;
    ancho: number = randomNumber(100, two3.width);
    private _nombre: string = '';
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    color: string
   
    constructor(posicionX: number, posicionY: number, nombre: string){
        super(posicionX, posicionY);
        this.nombre = nombre;
        this.nmrPisos = randomNumber(1,4);
        this.color = randomColor();
        this.pintar();

    }
    pintar(){
        let posicion = this.positionY
        for (let index = 0; index <this.nmrPisos; index++) {
            let newPiso = new Piso(this.positionX, posicion, this.ancho, randomColor());
            posicion -= Piso.alto;
            
        }
        posicion -= 30;
        two3.makeText(this.nombre, 350, posicion, {size: 30});
        two3.update();
        console.log('posicion',posicion);
    }
}

// Se coloca la informacion en el HTML 
(()=>{
// se coloca como width el ancho de canvas - 5 para que quepa completo 
    changeBuildingName();
    const newEdicio = new Edificio(350, two3.height - 100, 'christian' );
    // const piso = new Piso(350, two3.height - 100, two3.width - 5, randomColor());
    // const piso2 = new Piso(350, two3.height - 300, two3.width - 5, randomColor());
    console.log(two3.width);

})()

function changeBuildingName(){
    window.addEventListener('load', ()=>{
        const buildingName = document.getElementById('buildingName');
        buildingName?.children[1].addEventListener('click', ()=>{
            const name: HTMLInputElement = buildingName.children[0]?.value;
            
        })
    })
}