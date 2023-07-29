<script setup>
// import {ref} from 'vue'
  const name = 'christian';
  const colorsito = 'color:blue';
  // const producto = ref('pedro');

  const atributos = {
    'color': 'green',
    'class': 'subtitle' 
  }
</script>
<template>
<h1>Hola {{ name.split('').reverse().join('').toUpperCase() }} </h1>
<p>Prboando algo</p>
</template>

<style>
h1{
  color: red;
}
</style>