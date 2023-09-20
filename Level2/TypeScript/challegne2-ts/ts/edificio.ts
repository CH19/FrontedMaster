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
        const ventanita = two3.makePolygon(this.positionX, this.positionY, this.tamanno, 4 );
        ventanita.fill = this.luzEncendida ? 'yellow' : 'black';
        if(this.comMarco) {
            ventanita.stroke = '#FFF';
            ventanita.linewidth = this.tamanno / 8;
        }
        two3.update()
    }
}
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
        let position = this.positionX;
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
        console.log(this.ancho);
        two3.update();
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
        two3.makeText(this.nombre, this.positionX, posicion, {size: 30});
        two3.update();
        console.log('posicion',posicion);
    }
}

// Se coloca la informacion en el HTML 
(()=>{
// se coloca como width el ancho de canvas - 5 para que quepa completo 
    changeBuildingName();
    console.log(two3.width);

})()

function changeBuildingName(){
//    funccion para la creacion del edificio se hace uso del sesion Storage para que al momento de recargar la pagina el usuario pueda usar 
//    los datos ya puestos del nombre del edificioContainer, si el usuario desea cambiar de nombre tambien se tiene otra opccion 
    window.addEventListener('load', ()=>{
        const buildingName = document.getElementById('buildingName');
        buildingName?.children[2].addEventListener('click', ()=>{
            window.sessionStorage.removeItem('name');
            buildingName.children[0].style.display = 'block';
            buildingName.children[1].style.display = 'block';

            location.reload()
        })
        if(window.sessionStorage.getItem('name')){
            buildingName.children[0].style.display = 'none';
            buildingName.children[1].style.display = 'none';
            buildingName?.children[2].style.display = 'block';
            let name = window.sessionStorage.getItem('name');
            return new Edificio(randomNumber(0, two3.width), two3.height - 100, `Edificio ${capitalizar(String(window.sessionStorage.getItem('name').replace(/['"]+/g, '')))}` )
        }
        
        buildingName?.children[1].addEventListener('click', ()=>{
            const name: HTMLInputElement = buildingName.children[0]?.value;
            const newEdicio = new Edificio(randomNumber(0, two3.width), two3.height - 100, `Edificio ${capitalizar(String(name))}` );
            buildingName.children[0].value = '';
            buildingName.children[0].style.display = 'none';
            buildingName.children[1].style.display = 'none';

            buildingName.children[2].style.display = 'block';
            window.sessionStorage.setItem('name', JSON.stringify(name))
        })
      
    })
}
function capitalizar(word: string) {
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}