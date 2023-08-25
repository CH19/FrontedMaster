<script setup>
import { onMounted, ref } from "vue";
// Probando variables de referencia 
let hola = ref(null);
// Variables emmit probando comunicacion con un componente padre 
let dato = ref('');
// let emmit = defineEmits({response: String})
// let contenidoImput = ref('');
// emmit('response');
// Probando si el componente se monto y como funcionan los template refs 
onMounted(function(){
    // console.log('Hola');
    // hola.value.focus();
    hola.value.focus();
});
// probando props 
const propsComponent = defineProps({
    idCard: Number,
    title: String,
    email: String,
})
// probando emmits

</script>

<template>
    <div>
        <input type="text" ref="hola">
         <h4>{{ title }}</h4>
         <h3>Tu id es: {{ idCard }}</h3>
         <h2>tu email es: {{ email }}</h2>
         <button @click="informacion">enviar informacion</button>
    </div>
<!-- <input type="text" v-model="contenidoImput"> -->
</template>


<style scoped>

</style>
