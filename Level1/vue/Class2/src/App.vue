<script setup>
'use strict'
import { ref } from 'vue';
const contador = ref(0)
const NavbarWords = ref(['Pokemon data', 'Game mechanics', 'Pokemon Games', 'Comunity/Other']);
const preferencias = ref(['water', 'fire', 'electric', 'tierra', 'aire'])
const hombre = ref('hola como estas');
const ciudad = ref('');
let elecciones = ref(['']);
const generos = ref('masculino', 'femenino');
const sexo = ref('');
const logueado = ref(false);
function aumentar(){
  contador.value++;
}
function mensaje(msg, event){
  alert(msg);
  if (event) {
      console.log(event.target.tagName)
    }

}
function formSend(){
  alert('form enviador')
}
function evitarCopiar(e){
  if(e.ctrlKey && e.key == 'c') alert('no puedes copiar');
}

</script>

<template>
  <header>
   <div id="sub-Header" @click.stop.prevent="mensaje('holi')">
    <div class="menu-item" @click.stop="mensaje(word)" v-for="word in NavbarWords" :key="word"><a href="">{{ word }}</a>
    </div>
    <form action="">
      <input @keydown="evitarCopiar" type="text" placeholder="Search Pokemon">
      <input type="submit" value="Search" @click.prevent="formSend">
    </form>
   </div>
  </header>
  <main>
  <input @keyup.left.right.exact="alert('hola mundo')" v-model="hombre"  type="text" >
  <button @click="logueado = !logueado" @keyup.up="contador++" @keyup.down="contador--">{{ contador }}</button>
</main>
<div v-if="logueado">
  <h1>{{ hombre }}</h1>
<h1>{{ ciudad }}</h1>
<select name="cidades" v-model="ciudad" id="">
  <option value="Barquisimeto">Barquisimeto</option>
  <option value="Valencia">Valencia</option>
  <option value="Caracas">Caracas</option>
</select>
<div>
  <!-- preferencias -->
  <div v-for="pref in preferencias" :key="pref">
    <label :for="pref">{{ pref }}</label>
    <input type="checkbox" :value="pref" :name="pref" :id="pref" v-model="elecciones">
  </div>
  <div>{{ elecciones }}</div>
</div>
<div>
  <div v-for="genero in generos">
    <label :for="genero">{{ genero }}</label>
    <input type="checkbox" name="sexo" :value="genero" :id="genero" v-model="sexo">
  </div>
  {{ sexo }}
</div>
</div>
</template>

<style scoped>
*{
  font-size: 16px
}
  header{
    height: 10rem;
    background-color: #323232;
    background-image: url(https://img.pokemondb.net/design/avif/header-lg.avif);
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }
  #sub-Header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    width: 100%;

  }
  .menu-item{
    background-color: #363636;
    border-radius: 20px;

  }
  .menu-item > a{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    text-decoration: none;

  }
</style>
