'use strict';
// Clases vistas 16,17,18 y 19 del curso Vue básico 
const app = Vue.createApp({
    data() {
        return {
            items: ['Capsu', 'Pimienta', 'Maiz', 'Melon'],
            texto: 'Hola Vue',
        }
    },
    methods: {
      removeItem(index){
        this.items = this.items.filter((item, i)=> i !== index);
        
      },
      setTextoValue(e){
        this.texto = e;
      },

    },
    template: 
    `
    <v-header>
        <template v-slot:header >
            <h1>Hola people</h1>
        </template>
        <template v-slot:content>
    <ul>
    <v-item v-for="(item, index) in items" :text="item" @click=removeItem(index) />

    </ul>
        </template>
    </v-header>
    <h1> {{texto}}</h1>
    <v-input v-model:value="texto" />
    `,//html

})
// creando un sub componente importante para que calse 
app.component('v-header',{
    template: 
    `
    <header>
        <slot name="header"></slot>
    </header>
    <div>
        <slot name="content"></slot>
    </div>
    `
});
// Comunicacion de componentes padres con hijos 
app.component('v-item', {
    // La forma correcta de definir props es hacer un objeto y establecer el tipo de dato que se espera 
    props: {
        'text': String,
    },
    methods: {
        rm(){
        //  Enviar datos e informacion al componente padre 
            this.$emit('removeItem');
        }
    },
    template: `
    <li @click="rm">{{text}}</li>
    `
});

// v-model custom 
app.component('v-input', {
    props:{
        value: String,

    },
    template: `
    <input type="text" :value="value" @input="inputEvent" placeoholder="Escribe aqui algo"><span>{{value}}</span>
    `,
    methods:{
        inputEvent(e){
            // console.log(e.target.value);
            this.$emit('getInput', value);
        }
    }
})

const mont = app.mount('#app')