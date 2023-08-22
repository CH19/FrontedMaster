<script setup>
    import {ref, onMounted, computed} from 'vue';
    import videos from '../assets/videos.json';
    const vds = ref(videos);
    let tieneClase = ref(false);
    // Variable pensada para implementar "seleccion activa" o "inactiva" para plantear eso en las cards no se logro todavia 
    let itemsRef = ref([]);
    let contadorActivo = ref(0);
    let ValorPadre = ref('')
    console.log(itemsRef.value)
    onMounted(()=>{
        console.log('El componente Videos esta montado');
        // let itemsRef = ref([]);
    });
    const selecionActiva = computed(()=>{
        return tieneClase.value ? 'Seleccion activa' : 'Seleccion inactiva';
    });
    function colorChange(element, event){
        // event.stopPropagation()
        tieneClase.value = true;
        // Queria probar la implementacion de Jquery en Vue 
        $(`#${element}`).addClass('bg-success');
        contadorActivo.value++;
    }
    function variableHijo(value){
      ValorPadre.value = value
    }
</script>

<template>
    <div id="Hola" class="card-group">
      <h2>{{ selecionActiva }} <span v-if="tieneClase">{{ contadorActivo }}</span></h2>
     <div id="CardsContainer">
      <div class="card"  v-for="(video, index) in vds.videos" :key="video.title" :id="index" ref="itemsRef">
      <div class="card-body" @click.once.stop="colorChange(index)">
        <h6 class="card-title">{{ video.title }}</h6>
        <p class="card-text">{{ video.description }}</p>
        <p>{{ video.views }} Views</p>
        <span> <a :href="video.url" class="text-secondary">Video</a>. Duración: {{ video.duration }}</span>
     
    </div>
     </div>
        </div>
    
  </div>

</template>

<style scoped>
#CardsContainer{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    }
#CardsContainer > .card{
    font-size: 12px;
}
</style>