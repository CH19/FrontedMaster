<script setup>
import {ref, computed, reactive} from 'vue';
import card from './components/productos.vue';
  let users = '';
  // fetch('https://reqres.in/api/users?page=1')
  //     .then(response => {if(response.ok) return response.json()})
  //     .then(json => {
  //       console.log(json.data);
  //       users = json.data;
  //       console.log(users)
  //     })
    let number = ref(4);
    const precio = ref(100);
    function MultiplicarNumber(num){
      if(num > 50){
        mensaje.value = 'Numero Mayor a 50';
      }else{
        mensaje.value = 'Numero Menor a 50';
      }
      return num * 2

    }
    const subTotal = computed(()=>{
      if(number.value > 50){
        mensaje.value = 'Numero Mayor a 50';
      }else{
        mensaje.value = 'Numero Menor a 50';
      }
      return number.value * precio.value
    })
  let mensaje = ref('Hola');
const   mensajeAlreves = computed(()=>{
    return mensaje.value.split('').reverse().join('')
})
const materias = reactive([
  'Vue', 'Angular', 'React'
])
const MostrarMaterias = computed(()=>{
  return materias.length > 0 ? 'Tienes materias' : 'No tienes Materias';
})
</script>

<template>
  <!-- <div v-for="user in users" :key="user.id">
    <img :src="user.avatar" alt="">
    <p>{{ user.first_name}}</p> -->
<!-- </div> -->
<div id="example">
  <h1>sdfsdf</h1>
  <input type="text" v-model="mensaje">
  <p>Mensaje original: "{{ mensaje }}"</p>
  <p>Mensaje invertido computado: "{{ mensajeAlreves }}"</p>

  <input type="number" v-model="number">
<p><span>Cantidad de Productos</span>{{ number }}</p>
<p>Precio: {{ precio }}</p>
<p>subtotal: {{ subTotal }}</p>
<hr>
<h3>{{ MostrarMaterias }}</h3>
<card></card>
</div>
</template>

<style scoped>

</style>
