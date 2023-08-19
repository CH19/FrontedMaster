<script setup>
    import {ref, computed, onMounted, onUpdated, onUnmounted} from 'vue';
    let contador = ref(0);
    let intervalo = ref(null);
    const mensaje = ref('');
    onMounted(()=>{
        console.log('El componente esta montado');
    });
    onUpdated(()=>{
        console.log('El componente se ha actualizado');
    });
    onMounted(()=>{
        console.log('El componente se ha desmontado');
    });
</script>

<template>
 <div>
    <div>
        <input type="text" v-model="mensaje">
        <h1>{{ mensaje }}</h1>
    </div>
 <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
</template>

<style scoped>

</style>