<template>
   <div>
    <h1>Seleccionado</h1>
    <div>
        <h2>Lista Ref</h2>
        <ul>
        <slot name="listaRef" id="listaRef"></slot>
    </ul>
    </div>
    <div>
        <h2>Lista Props</h2>
        <ul>
            <!-- definiendo y colocando la lista de props  -->
            <li v-for="titulo, index in titulos" @click="emit('deleteElement', eliminarTitulo(index, atributos?.titulos))"  :key="index">{{ titulo }}</li>    
        </ul>
    </div>
   </div>
</template>

<script setup>

    const atributos = defineProps({
        titulos: Array
    });
    function eliminarTitulo(index, arr){
        arr.splice(index, 1);
    }
    const emit = defineEmits(['deleteElement']);
</script>

<style>

</style>