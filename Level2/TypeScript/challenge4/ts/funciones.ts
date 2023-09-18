
export function randomNumber(min: number, max:number){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}
export function randomColor(){
    // let colors = ['pink','gray', 'orange', 'blue', 'red', 'lightblue', 'purple', 'bisque', 'green', 'lightgreen', 'yellow', 'brown']
    // return colors[Math.floor(Math.random() * colors.length)]
    const letters: string = '0123456789ABCDEF';
    let color:string = '#';
    for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * (letters.length - 1))]        
    }
    return color
}