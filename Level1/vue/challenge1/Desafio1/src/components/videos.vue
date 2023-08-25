<script setup>
    import {ref, onMounted, computed, watch} from 'vue';
    import videos from '../assets/videos.json';
    import seleccionados from './seleccionados.vue';
    const vds = ref(videos);
    let tieneClase = ref(false);
    // Variable pensada para implementar "seleccion activa" o "inactiva" para plantear eso en las cards no se logro todavia 
    let contadorActivo = ref(0);
    let ValorPadre = ref('');
    // Variable que hace referecnia a todas los elementos html de las cards
    let VideosSeleccionados = ref([]);
    // Variable con los titulos de los videos 
    let titulosVideosRef = ref([]);
    let titulosVideosProps = ref([])
    let indexActualRef = ref(0);
    
    // Metodo para definir cuando el componente videos este montado 
    onMounted(()=>{
        console.log('El componente Videos esta montado');
        console.log();
        // let itemsRef = ref([]);
    });
    // Propiedad computada para saber si hay videos seleccionados o no seleccionados 
    const selecionActiva = computed(()=>{
        return tieneClase.value ? 'Seleccion activa' : 'Seleccion inactiva';
    });
    
    // Funcion para cambiar color y de ahora en adelante tambien para agregar el texto a la lista de videos seleccionados 
    function colorChange(element, event){
        // event.stopPropagation()
        tieneClase.value = true;
        let tituloActual = VideosSeleccionados.value[Number(element)].firstElementChild.firstElementChild.innerText;

        VideosSeleccionados.value[Number(element)].firstElementChild.classList.toggle('bg-success');
        VideosSeleccionados.value[Number(element)].firstElementChild.classList.toggle('text-light');
        // para solo pintar las variables con solo la referencia en la lista 
        // && titulosVideosProps.value.includes(tituloActual) == false
        if(element < (vds.value.videos.length / 2)){
            titulosVideosRef.value.push(tituloActual);
            // variable para contar cuantos videos se estan agregando 
            contadorActivo.value++;
        };
        // Condicional para solo pintar los elementos queridos 
        if(element > (vds.value.videos.length / 2) && element < vds.value.videos.length ){
            titulosVideosProps.value.push(tituloActual);

        }
        console.log(titulosVideosRef.value)

    }
    watch(titulosVideosRef.value, (now, old)=>{
        console.log(now.length + ' '+  contadorActivo.value )
        // es necesario comparar con la variable contador puesto que si se hace con el valor anterior sera imposible porque vue en arreglos no analiza los cambios con el metodo watch
        if(now.length < contadorActivo.value){
            console.log('se elimino un elemento');
            deseleccionarVideo(indexActualRef.value);
        }else{
        }
    },{deep: true});
    watch(titulosVideosProps.value, (now, old)=>{
        if(now < old){
            console.log('se elimino un elemento');
        }
    });
    function deseleccionarVideo(index){
        console.log(tieneClase.value)
        tieneClase.value = false;
        document.getElementById(index).firstElementChild.classList.remove('bg-success');
        document.getElementById(index).firstElementChild.classList.remove('text-light');
}
function eliminarTitulo(index, arr){
        arr.splice(index, 1);
        indexActualRef.value = index;
        console.log(indexActualRef.value);
    }
</script>

<template>
    <div id="contBig" class="card-group my-4">
        <!-- Colocando el arreglo de titulosProps como propiedad del componente seleccionados  -->
        <seleccionados v-if="contadorActivo > 0" :titulos="titulosVideosProps" @deleteElement="msj => console.log(msj)">
            <template #listaRef>
                <li v-for="(titulo, index) in titulosVideosRef" @click="eliminarTitulo(index, titulosVideosRef)" :key="index"> {{ titulo }}</li>
            </template>
        </seleccionados>
        <button @click.stop="deseleccionarVideo">deseleccionarVideo</button>
        <div id="CardsContainer">
      <div class="card"  v-for="(video, index) in vds.videos"  :key="video.title" :id="index" ref="VideosSeleccionados">
      <div class="card-body" @click.once.stop="colorChange(index)"  >
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