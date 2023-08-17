<script setup>
import {ref, computed} from 'vue';
  let users = '';
  // fetch('https://reqres.in/api/users?page=1')
  //     .then(response => {if(response.ok) return response.json()})
  //     .then(json => {
  //       console.log(json.data);
  //       users = json.data;
  //       console.log(users)
  //     })
    let number = ref(4);

    function MultiplicarNumber(num){
      number = num * 2
      return number

    }
    const multiplicar = computed(()=>{
      return this.number * 2;
    })
  //   var vm = new Vue({
  // el: '#example',
  // data: {
  //   message: 'Hola'
  // },
  let mensaje = ref('Hola');
const   mensajeAlreves = computed(()=>{

    return this.message.split('').reverse().join('')
  })
</script>

<template>
  <h1>Nombres
  </h1>
  <!-- <div v-for="user in users" :key="user.id">
    <img :src="user.avatar" alt="">
    <p>{{ user.first_name}}</p> -->
<!-- </div> -->
<h1>Hola</h1>
<div id="example">
  <p>Mensaje original: "{{ mensaje }}"</p>
  <p>Mensaje invertido computado: "{{ }}"</p>
</div>

<p>{{ number }}</p>
<button @click="multiplicar">hola</button>
</template>

<style scoped>

</style>
