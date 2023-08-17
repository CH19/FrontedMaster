// 'use strict';
// const vm = Vue.createApp({
//     data() {
//         return {
//             text: '<h1>Hola Vue</h1>',
//             counter: 0,
//             xd: true,
//             img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJmonFMOyMnXCRZHRaPuSXQFgNSZ5V8FHuF4-WWpiyQ&s'
//            ,
//             atr: ['src']
//         }
//     },
//     methods: {
//         increment(){
//             this.counter++;

//         }, 
//         decrement(){
//             this.counter--;
//         }
//     },
   
//     template: `<div><button @click.prevent="increment">+</button><span>{{counter}}</span><button @click.prevent="decrement">-</button></div>
//     <img :[atr]="img">
// `,
 
// }).mount('#app');
// Vue.createApp({
//     data() {
//         return {
//             entrada: 'Hola',
//             salida: 'Adios'
//         }
//     },
// }).mount('#botones');
// console.log(vm);

// ejercicio creando nuestro primer componente 
// const vu = Vue.createApp({
//     data() {
//         return {
//             text: 'Hola Vue',
//         }
//     },
//     template: `<p>{{text}}</p>
//     <input v-model="text" type="text">`
// }).mount('#app');

// propiedades computadas ejercicio 
// const app = Vue.createApp({
//     data() {
//         return {
//             firstName: 'Christian',
//             lastName: 'La Cruz',
//             time: new Date(),
//         }
//     },
//     computed: {
//         fullName(){
//             return `${this.firstName}  ${this.lastName}`;
//         },
//         today(){
//             return this.time.toLocaleDateString();
//         }
//     },
//     template: `<div>
//     <h2>{{fullName}}</h2>
//     <h3>{{today}}</h3>
//     </div`
// }).mount('#app');

// Practicando los Wathcers

// Ejercicio 
// Crea un algoritmo para saber si una puerta inteligrnte esta abierta o cerrada y muestra el mensaje en consola 
const app = Vue.createApp({
    data() {
        return {
            text: 'Abrir La Puerta',
            estado:false, 
            mensaje: 'La puerta esta cerrada' ,
            puerta: ''

        }
    },
    template: `<button @click="interaccionPuerta">{{text}}</button>
        <div>
        <img :src="puerta" style="width: 150px; height: 150px; background-color: red;">
        <p>{{mensaje}}</p>
        </div>                                
    `,
    computed:{
    },
    methods: {
        // abrirPuerta(){
        //     if(!this.estado){
           
          
    
        // },
        interaccionPuerta(){
            console.log(this.estado)
            this.estado = !this.estado
            return this.abrirPuerta()
        }
    },
    watch: {
       estado(value){
        if(!value){
            this.puerta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HYNix2bHbwFmKVZTyF_v2hIkisl2xE9O1g&usqp=CAU';
            this.mensaje = 'la puerta esta cerrada';
            this.text = 'abrir puerta';
        }else{
            this.puerta = 'https://i0.wp.com/colaboratorio.net/wp-content/uploads/2017/01/Puertas-abiertas.jpg?ssl=1';
            this.mensaje = 'La puerta esta abierta';
            this.text = 'cerrar puerta';

        }
       }
    },
}).mount('#app')