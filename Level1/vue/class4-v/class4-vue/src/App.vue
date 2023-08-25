<script setup>
import { ref, onMounted, watch } from 'vue'
import Refs from './components/Refs.vue';
import emmits from './components/emmits.vue';
import slotclass from './components/slotclass.vue';
// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)
const items = ref(['Christian', 'Juan', 'Fabian', 'Juana', 'Daniel']);
const itemsRef = ref([])
const counter = ref(0);
const mensaje = ref('');
// probando variable para un atributo en un componente hijo 
let mensajeTitle = ref('');
// probando un arreglo de atributos 
const posts = [{
  id: 1 ,
  email: 'JuanRamirez@gmail.com',
},{
  id: 2,
  email: 'PedroSahnzaes@gmail.com',
},{
  id: 3,
  email: 'ChristianLCC@gmail.com',
},];
let titleEmmit = ref('');
onMounted(() => {
  input.value.style.background = 'red';
  input.value.style.color = '#FFF';
  input.value.focus();
  console.log('componente funcionando');
});
// probando wathcers 
const wathcCounter = watch(counter, (newValue, oldValue) =>{
mensaje.value = `El contador anterior estaba en ${oldValue} el actual esta en en ${newValue}`;
} )
function getElement(value){
  console.log(value);
  titleEmmit = value;

}

</script>

<template>
  <div id="BigContainer">
    <h1>{{ titleEmmit }}</h1>
    <input type="text" ref="input" v-model="mensajeTitle">
    <button>send</button>
    <div v-for="(item, index) in items" :key="index" ref="itemsRef">
      <h2>{{ item }}</h2>
    </div>
    <button @click="counter++">{{ counter }}</button>
    <h5>{{ mensaje }}</h5>
    <emmits @send="(msj) => getElement(msj)"></emmits>

    <slotclass>
      <!-- Ejemplo de como se colocan los slots en compsition API  -->
      <template #main>
        <div>
          <h3>Hola mundo</h3>
        </div>
      </template>
      <template #header>
        <div>
          <h3>Hola SEXOOOOOO</h3>
        </div>
      </template>
    </slotclass>
  </div>
  <!-- <Refs v-for="(post, index) in posts " :key="index" :idCard="index + 1" :email="post.email" :title="mensajeTitle"></Refs> -->
</template>