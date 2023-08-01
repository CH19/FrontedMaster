<script setup>
// usando reactividad 
import {ref, computed} from 'vue'
  const nombre = 'christian';
  const colorsito = 'color:blue';
  // const producto = ref('pedro');
  let activo = 'si'
  const atributos = {
    'color': 'green',
    'class': 'subtitle' 
  }
  const arrayNane = ['Menu', 'Sobre nostros', 'informacion adicional', 'paz']
  const numbers = ref(['23']);

  // Array ejercicio 
  const name = "Vue 3";
    const arrayFrutas = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
            img: 'https://www.semana.com/resizer/aFlCrqRB5tcLkt-aB8oGfRK9VZQ=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/UM4AUXGP25H6NM6CS7UENR32DQ.jpg',
            stock: 10
          },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
          img: 'https://thumbs.dreamstime.com/b/pera-7682120.jpg',
            stock: 20  
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
            img: 'https://biotrendies.com/wp-content/uploads/2015/07/Naranja1-1200x910.jpg',
            stock: 10
          },
    ];
    const objetoEjemplo = {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
            img: 'https://biotrendies.com/wp-content/uploads/2015/07/Naranja1-1200x910.jpg'
    }
    let counter = ref(0);
    function handleclick(){
      alert('compraster un producto');
    }
    function increaseCounter(){
      console.log('aumentar contador');
      // Para acceder a la data y modificar a una variable reactiva hay que usar ".value"
      counter.value++; 
    }
    function decreaseCounter(){
      counter.value--;
    }
    function resetCounter(){
      counter.value = 0;
    }
    function add(){
    //  alert('sdfsdf');
      numbers.value.push(counter.value);
      console.log(numbers)
    }
    const bloquearBotonExistente = computed(()=>{
      const numbersito = numbers.value.find(num => num == counter.value);
      if(numbersito === 0) return true;
      return numbersito ? true : false;
    })

</script>
<template>
<header>
<div class="logo">
  <h1>Hola {{ nombre.split('').reverse().join('').toUpperCase() }} </h1>
<!-- <p>Probando algo</p> -->
<!-- directiva v-if  -->
<h3 v-if="activo == 'si'">Estoy activo</h3>
<h4 v-else-if="activo == 'no'">INACTIVO</h4>
<h1 v-else>holiholiholi</h1>
</div>
<ul>
  <li v-for="menu, index in arrayNane">
   {{ index + 1 }} {{ menu }}
  </li>
</ul>
</header>
<main>
  <h3>Products</h3>
  <!-- directiva v-for  -->
  <ul>
    <li v-for="fruta, index in arrayFrutas" :key="fruta.name">
      <div v-if="fruta.stock > 0" class="card" style="width: 18rem;">
  <img v-bind:src="fruta?.img " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ fruta.name }}</h5>
    <p class="card-text">{{ fruta.description }} <br> cantidad: {{ fruta.stock }}</p>
    <!-- Practicando v-on metodo para interactucar con click -->
    <div class="btn-group">
      <a href="#" @click="handleclick" class="btn btn-primary">{{ fruta.price }}</a>
     <button @click="decreaseCounter" class="btn btn-secondary">-</button>
     <span v-bind:class="(counter > 0) ? 'bg-success' : 'bg-danger'" class="text-light p-2hh">{{ counter }}</span> 
     <!-- <span v-else="counter.value < 0" class="bg-danger text-light">{{ counter }}</span> -->
      <button @click="increaseCounter" class="btn btn-secondary">+</button>
      <button @click="resetCounter" class="btn btn-danger">Reset</button>
      <button :disabled="bloquearBotonExistente" class="btn btn-warning" @click="add()">Add</button>

    </div>
  </div>
</div>
    </li>
  </ul>
  <div>
    <h1>List Numbers</h1>
    <span>{{ numbers }}</span>
  </div>
</main>
<!-- Recorrer un objeto con vue  -->
<!-- <div v-for="value, propiedad, index in objetoEjemplo" :key="value">{{index + 1}}{{propiedad}}:{{ value }}</div> -->
</template>

<style>
h1{
  color: red;
}
</style>