<!-- se escribe emit pero se puso para el nombre del componente  -->
<script setup>
import {ref} from 'vue';
    const emits = defineEmits([
        'send',
    ])
    let texto = ref('sf');
    emits('send', texto);
</script>

<template>
    <input type="text" v-model="texto">
</template>

<style scoped>

</style>