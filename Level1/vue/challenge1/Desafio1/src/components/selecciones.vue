<!-- Componente para el menu lateral de las selecciones en el componente  -->
<script setup>
    import {ref} from 'vue';
    const menuData = ref([
{
    icon: '<ion-icon name="home-outline"></ion-icon>',
    title: 'Home',
},
{
    icon: '<ion-icon name="play-circle-outline"></ion-icon>',
    title: 'Shorts',
},
{
    icon: ' <ion-icon name="play-circle-outline"></ion-icon>',
    title: 'Suscripcciones',
},
{
    icon: '<ion-icon name="trash-bin-outline"></ion-icon>',
    title: 'Mi biblioteca',
},
    ]);
</script>
    
<template>
 <div class=" container-card mx-0 px-0">
    <figure v-for="(menu, index) in menuData" :key="index" :id="`menu${index}`">
        <a href="#" v-html="menu.icon" class="icon"></a>
        <span>{{ menu.title }}</span>
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
.icon {
  font-size: 2rem;
  color: black;
}
</style>