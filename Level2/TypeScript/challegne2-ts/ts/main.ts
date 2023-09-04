const canvas: HTMLCanvasElement | null = document.getElementById('tren');

class Tren {
    private _nombre : string = 'tren';

    constructor(nombre?: string){
        if(nombre) this._nombre = nombre
    }
    set nombre(nombre: string){
        this._nombre = nombre
    }
    get nombre(){
        return this._nombre
    }

    pintar(){
        if (canvas!.getContext){
            let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d')
            if (!(dimension = canvas.getContext("2d"))) {
                throw new Error(`2d context not supported or canvas already initialized`);
            }
            dimension.fillStyle = randomColor()
            dimension.fillRect(100, 245, 450, 30)

            this.square(120, 200, 90, randomColor())
            this.square(260, 200, 90, randomColor())
            this.square(400, 200, 90, randomColor())

            this.circle(165, 310, 40, randomColor())
            this.circle(305, 310, 40, randomColor())
            this.circle(445, 310, 40, randomColor())

            dimension.fillStyle = randomColor()
            dimension.fillRect(540, 80, 180, 210)
            dimension.fillStyle = randomColor()
            dimension.fillRect(520, 30, 220, 50)
            this.square(585.5, 120, 90, randomColor())
            this.circle(635, 290, 65, randomColor())
            this.square(720, 139, 150, randomColor())
            this.square(780, 89, 50, randomColor())
            dimension.fillStyle = randomColor()
            dimension.fillRect(755, 35, 100, 55)
            this.circle(755, 315, 34, randomColor())
            this.circle(830, 315, 34, randomColor())
            this.triangle(870, 194, 95, randomColor())

            this.hex(138, 110, randomColor())
            this.pent(305, 110, randomColor())
            this.oct(427, 110, randomColor())

            dimension.font = '20px sans-serif'
            dimension.fillStyle = 'white'
            dimension.fillText(this.nombre, 770, 210)
        }
    }
    square(x: number, y: number, size: number, color: string){
        let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d')
        if(dimension != null){
            dimension.beginPath()
            dimension.moveTo(x,y)
            dimension.lineTo((x + size), y)
            dimension.lineTo((x + size), (y + size))
            dimension.lineTo(x, (y + size))
            dimension.fillStyle = color
            dimension.closePath()
            dimension.fill()
            dimension.stroke()}
    }
    circle(x: number, y: number, size: number, color: string){
        let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d')
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath()
        dimension.arc(x, y, size, 0, Math.PI*2)
        dimension.closePath()
        dimension.fillStyle = color
        dimension.fill()
        dimension.stroke()
    }
    triangle(x: number, y: number, size: number, color: string){
        let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d');
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath()
        dimension.moveTo(x,y)
        dimension.lineTo(x, (y + size))
        dimension.lineTo((x + size), (y + size))
        dimension.fillStyle = color
        dimension.closePath()
        dimension.fill()
        dimension.stroke()
    }

    hex(x: number, y: number, color: string){
        let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d')
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath()
        dimension.moveTo(x,y)

        dimension.lineTo((x - 30), (y + 45))
        dimension.lineTo(x, (y + 90))
        dimension.lineTo((x + 55), (y + 90))
        dimension.lineTo((x + 85), (y + 45))
        dimension.lineTo((x + 55), y)

        dimension.fillStyle = color
        dimension.closePath()
        dimension.fill()
        dimension.stroke()
    }
    pent(x: number, y: number, color: string){
        let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d')
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath()
        dimension.moveTo(x,y)

        dimension.lineTo((x - 45), (y + 40))
        dimension.lineTo((x - 25), (y + 90))
        dimension.lineTo((x + 30), (y + 90))
        dimension.lineTo((x + 45), (y + 40))

        dimension.fillStyle = color
        dimension.closePath()
        dimension.fill()
        dimension.stroke()
    }
    oct(x: number, y: number, color: string){
        let dimension: CanvasRenderingContext2D | null = canvas!.getContext('2d')
        if (!(dimension = canvas.getContext("2d"))) {
            throw new Error(`2d context not supported or canvas already initialized`);
        }
        dimension.beginPath()
        dimension.moveTo(x,y)

        dimension.lineTo((x - 30), (y + 30))
        dimension.lineTo((x - 30), (y + 60))
        dimension.lineTo(x, (y + 90))
        dimension.lineTo((x + 40), (y + 90))
        dimension.lineTo((x + 70), (y + 60))
        dimension.lineTo((x + 70), (y + 30))
        dimension.lineTo((x + 40), y)
        

        dimension.fillStyle = color
        dimension.closePath()
        dimension.fill()
        dimension.stroke()
    }
}

function randomColor(){
    let colors = ['pink','gray', 'orange', 'blue', 'red', 'lightblue', 'purple', 'bisque', 'green', 'lightgreen', 'yellow', 'brown']
    return colors[Math.floor(Math.random() * colors.length)]
}


let miTren = new Tren()
// miTren.nombre = 'juan'
miTren.pintar()
window.addEventListener('load', ()=>{

    let counter = 0;
    const timer = setInterval(()=>{
        counter++;
        document.getElementById('velocidad').textContent =   `has recorrido ${counter} metros`;
        if(canvas) canvas.style.left = `${counter * 2}px`;
        console.log('me estoy moviendo ' + counter + "rem");
    }, 1000)
    console.log(timer);
    
const api = 'https://api.github.com/users/CH19'
fetch(api).then(response => {if(response.ok) return response.json()})
.then(json => {
    console.log(json);
    document.getElementById('imageCH19')?.setAttribute('src', json?.avatar_url);
    document.getElementById('linkName')?.setAttribute('href', json?.html_url);
});
})
