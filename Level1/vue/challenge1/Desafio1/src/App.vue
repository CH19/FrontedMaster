<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {reactive, ref} from 'vue';
import headeryt from './components/headeryt.vue';
import selecciones from './components/selecciones.vue';
const cliente = reactive({
  Nombre:'CADI F1 C.A.',
  usuario: '@Cadif1AcademiaSoftware',
   nroSuscriptores: '4.59 K suscriptores',
   nroVideos: '170 videos',
   descripcionBreve: 'CADI F1 C.A. Academia de Software. Entrenamos personas en el uso de h... ',
   imgLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaSKpYFNhsdiuWA5_g_5wtvx-FDkp8Anl7Zy3UPQ=s176-c-k-c0x00ffffff-no-rj',
   imgBanner:'https://yt3.googleusercontent.com/VKIQ_KxkTb21Xo3zDFcnPkMWe3_gYVH5Ey_TMbGwkKYmZdsGS5GTVCAQ7g-6HVpkhK8hPSmSNw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
});
const enlaces = ref([{
    logo: './assets/Img/Cadif1-Logo.svg',
    enlace: 'https://cadif1.com/',
  }
  ,{
  logo:'<ion-icon name="logo-facebook"></ion-icon>',
  enlace: 'https://www.facebook.com/cadif1'
},
,{
  logo: '<ion-icon name="logo-instagram"></ion-icon>',
  enlace: 'https://www.instagram.com/cadif1/'}
]);
const opccionesCanal = ['Pagina principal', 'Videos', 'Short', 'En vivo', 'Listas de Reproducción', 'Comunidad', 'Canales', 'Información']
const imagenFondo = {'backgroundImage': `url(${cliente.imgBanner})`};
const busqueda = ref('');
const Logo = cliente.imgLogo;
let itsBotonClicked = ref(false);
// Boton funcionalidad
function aldarClick(){
  itsBotonClicked.value = !itsBotonClicked.value;
}
function mensaje(m){
  alert(m);
}

</script>

<template>
  <div id="BigContainer">
    <headeryt></headeryt>
    <!-- <header>
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
</header> -->
<main>
 <selecciones></selecciones>
  <div class="channel mx-0 px-0">
    <div :style="imagenFondo" class="banner-channel py-0 my-0 bg-inf">
      <div id="enlaces" class="d-flex">
        <figure class="border-top border-start border-bottom"><a @click.prevent.stop="mensaje('le diste click a cadif')" href=""><img src="./assets/Img/Cadif1-Logo.svg" @click="alert('le diste click a Cadif')" style="width: 14px; height: 14px; background-color: orange;" alt=""></a>
        </figure>
        <figure class="border-top border-bottom" @click.prevent.stop="mensaje('le diste click a facebook')"><a href=""><ion-icon name="logo-facebook"></ion-icon></a></figure>

        <figure class="border-top border-end border-bottom"><a href=""><ion-icon @click.prevent.stop="mensaje('le diste click a instagram')" name="logo-instagram"></ion-icon></a>
        </figure>
      </div>
 </div>
<div class="channel-information">
<figure>
  <img :src="Logo" alt="">
</figure>
<!-- Requerimiento 5  -->
<div class="content" v-if="itsBotonClicked">
  <div class="data-container">
    <h5 class="card-title">{{ cliente.Nombre.toUpperCase()}}</h5>
        <p class="channel-title">{{ cliente.usuario.toUpperCase() }}<span>{{ cliente.nroSuscriptores.toUpperCase() }}</span><span>{{ cliente.nroVideos.toUpperCase() }}</span></p>
<div class="channel-description">
  <p class="channel-descripccion text-light "><small class="text-body-secondary"> {{ cliente.descripcionBreve.toUpperCase() }}</small></p>

</div>
  </div>
</div>
<div class="content" v-else>
  <div class="data-container" >
    <h5 class="card-title"><i>{{ cliente.Nombre}}</i></h5>
        <p class="channel-title"><i>{{ cliente.usuario }}<span>{{ cliente.nroSuscriptores }}</span><span>{{ cliente.nroVideos }}</span></i></p>
<div class="channel-description">
  <p class="channel-descripccion text-light "><small class="text-body-secondary"><i> {{ cliente.descripcionBreve }}</i></small></p>

</div>
  </div>

</div>

<div class="suscribed-container">
  <button @click="aldarClick" :class="itsBotonClicked ? 'btn btn-light': 'btn btn-dark'">{{ itsBotonClicked ? 'Suscrito': 'Suscribirse'}}</button>
</div>
</div>
<div class="d-flex justify-content-around border-bottom" style="width:70rem;">
  <!-- Requerimiento 4  -->
  <!-- Se utilizo la directiva v-for aunque no la hemos visto para maquetar mas rapido los enunciados html espero que no haya ningun problema  -->
  <div v-for="opccion in opccionesCanal" :key="opccion" class="fw-light" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">{{ opccion }}</div>
  <div><ion-icon name="search-outline"></ion-icon><input type="text" v-model="busqueda"></div>
</div>
  </div>
  <h1>{{ busqueda }}</h1>
</main>

  </div>
</template>

<style scoped>
.banner-channel{
  width: 100%;
  height: 50%;
  background-size: contain;
  background-position: 0;
  background-repeat: no-repeat;
  position: relative;
}
.channel{
  height: 500px;
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
#enlaces{
  position: absolute;
  bottom: 10px;
  right: 0;
  padding: 20px;
  & figure{
    padding: 10px;
  }
}
</style>
