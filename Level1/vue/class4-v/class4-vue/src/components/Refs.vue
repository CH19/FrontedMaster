<script setup>
import { onMounted, ref } from "vue";
let hola = ref(null);

onMounted(function(){
    // console.log('Hola');
    // hola.value.focus();
    $ref.hola.value.focus();
});

</script>

<template>
    <input type="text" ref="hola">
    <h1>{{ hola }}</h1>
</template>


<style scoped>

</style>
