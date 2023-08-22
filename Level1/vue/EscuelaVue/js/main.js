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
// const app = Vue.createApp({
//     data() {
//         return {
//             text: 'Abrir La Puerta',
//             estado:false, 
//             mensaje: 'La puerta esta cerrada' ,
//             puerta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HYNix2bHbwFmKVZTyF_v2hIkisl2xE9O1g&usqp=CAU',
//             styles: {
//                 width: '100vw',
//                 height: '100vh',
//                 padding: 0,
//                 margin: 0,
//                 backgroundColor: '#e5e5e5',
//             },
//             username: '',

//         }
//     },
//     template: `<div :style="styles">
//     <button @click="interaccionPuerta">{{text}}</button>
//         <div>
//         <div>
//         <div v-if="estado">Cerrar puerta
//         <span>{{username}}</span>
//         </div>
        
//         <div v-else> 
//         Abrir Puerta
//         <input type="text" v-model="username" value="">
//         </div>
//         </div>
//         <img :src="puerta" style="width: 150px; height: 150px;">
//         <p>{{mensaje}}</p>
//         </div> 
//     </div>                               
//     `,
//     computed:{
//     },
//     methods: {
//         // abrirPuerta(){
//         //     if(!this.estado){
           
          
    
//         // },
//         interaccionPuerta(){
//             console.log(this.estado)
//             this.estado = !this.estado
//             return this.abrirPuerta()
//         }
//     },
//     watch: {
//        estado(value){
//         if(!value){
//             this.puerta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HYNix2bHbwFmKVZTyF_v2hIkisl2xE9O1g&usqp=CAU';
//             this.mensaje = 'la puerta esta cerrada';
//             this.text = 'abrir puerta';
//             this.styles.backgroundColor = '#eceaa6';
//             this.username = ''
//         }else{
//             this.puerta = 'https://i0.wp.com/colaboratorio.net/wp-content/uploads/2017/01/Puertas-abiertas.jpg?ssl=1';
//             this.mensaje = 'La puerta esta abierta';
//             this.text = 'cerrar puerta';
        
//             this.styles.backgroundColor = '#b5e7a0'

//         }
//        }
//     },
// }).mount('#app')

// Red social de ejemplo 

const app = Vue.createApp({
    data() {
        return {
            text: "Accede a tu cuenta",
            open: false,
            username: "",
            posts: [{
                title: "Titulo 1",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 2",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 3",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 4",
                description: "Lorem ipsum..."
            }]
        };
    },
    watch: {
        open(value) {
            if (value) {
                this.text = "Cierra sesión";
            } else {
                this.text = "Accede a tu cuenta";
                this.username = "";
            }
        }
    },
    computed: {
        label() {
            return this.open ? "Salir" : "Acceder";
        },
        styles() {
            return this.open ? ['open'] : ['closed'];
        }
    },
    //html
    template: ` 
    <div class="container" :class="styles">
        <h2>{{ text }}</h2>
        <div v-if="open">
            <p>Hola, {{ username }}</p>
              <item v-for="(item, i) in posts"></item>
              </div>

        </div>
        <div v-else>
            <div>Username</div>
            <input type="text" v-model="username" />    
        </div>
        <button @click="open = !open">
            <div v-if="!open">Acceder</div>
            <div v-else>Salir</div>
        </button>
    </div>
    `
   
});
app.component('items',{
    template: `
    <div class="list">

    <div v-for="(item, i) in posts" :key="i" class="item">
    <div class="title">{{ item.title }}</div>
    <p>{{ item.description }}</p>
</div>

    `
});
// separar el contenido de la app del despliegue de la app 
const vm = app.mount("#app");