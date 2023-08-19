<!-- Componente para el menu lateral de las selecciones en el componente  -->
<script setup>
    import {ref} from 'vue';
    const menuData = ref([
{
    icon: '',
    title: '',
},
{
    icon: '',
    title: '',
},
{
    icon: '',
    title: '',
},
{
    icon: '',
    title: '',
},
    ]);
</script>
    
<template>
 <div class=" container-card mx-0 px-0">
    <figure>
      <ion-icon name="home-outline"></ion-icon>
      <span>Home</span>
    </figure>
    <figure>
      <ion-icon name="play-circle-outline"></ion-icon>
      <span>Shorts</span> 
    </figure>
    <figure>
      <ion-icon name="briefcase-outline"></ion-icon>
      <span>Suscripcciones</span>
    </figure>
    <figure>
      <ion-icon name="trash-bin-outline"></ion-icon>
      <span>Mi biblioteca</span>
    </figure>
  </div>

</template>

<style scoped>
.container-card{
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.container-card > figure{
  display: flex;
  flex-direction:column;
  align-items: center;
  cursor: pointer;
}
.container-card > figure > ion-icon {
  font-size: 2rem;
  color: black;
}
</style>