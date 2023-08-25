<script setup>
'use strict'
import { ref } from 'vue';
const contador = ref(0)
const NavbarWords = ref(['Pokemon data', 'Game mechanics', 'Pokemon Games', 'Comunity/Other']);
const preferencias = ref(['water', 'fire', 'electric', 'tierra', 'aire'])
const hombre = ref('hola como estas');
const ciudad = ref('');
let Booleano1 = (ref(''));
console.log(Booleano1.value);
console.log(Boolean(Booleano1.value));
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
<div>
  <button disabled>Boton desactivado</button>
</div>
<!-- <header>
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
  <button @click="logueado = !logueado" disabled="false" @keyup.up="contador++" @keyup.down="contador--">{{ contador }}</button>
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
  preferencias
  <div v-for="pref in preferencias" :key="pref">
    <label :for="pref">{{ pref }}</label>
    <input type="checkbox" :value="pref" :name="pref" :id="pref" v-model="elecciones">
  </div>
  <div>{{ elecciones }}</div>
</div>

<div :id="Booleano1" :class="Booleano1">
  <h1 v-for="n in 10" :key="n">Booleano1</h1>
</div>
</div> -->
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
