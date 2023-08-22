<script setup>
    const actividad = 'Hola';
    function colorChange(element, event){
        // event.stopPropagation()
        tieneClase.value = true;
        $(`#${element}`).addClass('bg-success');

    }
</script>

<template>
    <h1>{{ actividad }}</h1>
</template>

<style scoped>

</style>
