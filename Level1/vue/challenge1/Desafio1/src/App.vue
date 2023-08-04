<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {reactive, ref} from 'vue';
const cliente = reactive({
  Nombre:'CADI F1 C.A.',
  usuario: '@Cadif1AcademiaSoftware',
   nroSuscriptores: '4.59 K suscriptores',
   nroVideos: '170 videos',
   descripcionBreve: 'CADI F1 C.A. Academia de Software. Entrenamos personas en el uso de h... ',
   imgLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaSKpYFNhsdiuWA5_g_5wtvx-FDkp8Anl7Zy3UPQ=s176-c-k-c0x00ffffff-no-rj',
   imgBanner:'https://yt3.googleusercontent.com/VKIQ_KxkTb21Xo3zDFcnPkMWe3_gYVH5Ey_TMbGwkKYmZdsGS5GTVCAQ7g-6HVpkhK8hPSmSNw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
});
const imagenFondo = {'background-image': `url(${cliente.imgBanner})`}
const Logo = cliente.imgLogo;
let itsBotonClicked = ref(false)
// Boton funcionalidad
function aldarClick(){
  itsBotonClicked.value = !itsBotonClicked.value;
}
</script>

<template>
<header>
  <nav class="navbar d-flex justify-content-center align-items-center navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div>
      <a href="#" id="Menu">#</a>
    <a class="navbar-brand" href="#">
      <img src="./assets/YouTube-Logo.wine.svg" alt="Logo" width="100" height="24" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div id="Buscador" class="btn-group">
      <input type="text" class="form-control ">
      <button style="border: none;">      <a class="text-dark"  style="text-decoration: none;" href=""><ion-icon name="search-outline"></ion-icon></a></button>
      <a class="btn" href="">      <ion-icon name="mic-outline"></ion-icon>
</a>
    </div>

    <div class="fiugre-container">
      <a class="btn" href="#" ><ion-icon name="videocam-outline"></ion-icon></a>      
      <a class="btn" href="" ><ion-icon name="notifications-outline"></ion-icon></a>
      <figure porfileFoto>
        <img :src="clienteimgLogo" alt="">
      </figure>
    </div>
  </div> 


</nav>
</header>
<main class="">
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
  <div class=" channel mx-0 px-0">
    <div :style="imagenFondo" class="banner-channel py-0 my-0 bg-inf">
 </div>
<div class="channel-information">
<figure>
  <img :src="Logo" alt="">
</figure>
<div class="content">
  <div class="data-container">
    <h5 class="card-title">{{ cliente.Nombre}}</h5>
        <p class="channel-title">{{ cliente.usuario }}<span>{{ cliente.nroSuscriptores }}</span><span>{{ cliente.nroVideos }}</span></p>
<div class="channel-description">
  <p class="channel-descripccion text-light "><small class="text-body-secondary">{{ cliente.descripcionBreve }}</small></p>

</div>
  </div>
</div>
<div class="suscribed-container">
  <button @click="aldarClick" :class="itsBotonClicked ? 'btn btn-light': 'btn btn-dark'">{{ itsBotonClicked ? 'Suscrito': 'Suscribirse'}}</button>
</div>
</div>
  </div>
  
</main>

</template>

<style scoped>
.banner-channel{
  width: 100%;
  height: 50%;
  background-size: contain;
  background-position: 0;
  background-repeat: no-repeat;
}
.channel{
  height: 400px;
}

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
.channel-information{
    display: flex;
    justify-content: space-around;
  width: 90vw;
}
.channel-information figure{
  padding: 20px;
  & img{
    border-radius: 20px;
  }
}
.content{
  width: 800px;
overflow: auto;  align-self: start;
display: flex;
justify-content: flex-start;

}
.data-container{
  width: 400px;
  height: 120px;

  
}
.data-container > p:first-of-type{
  
  font-size: 12px;
  display: flex;
  justify-content: space-around;
}
.channel-descripccion{
  font-size: .8rem;
}
main{
  display: grid;
  grid-template-columns: 130px 1fr;
}
</style>
