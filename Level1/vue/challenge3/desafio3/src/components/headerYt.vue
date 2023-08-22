<script setup>
</script>

<template>
    <header>
  <nav class="navbar d-flex justify-content-center align-items-center navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div>
      <a href="#" id="Menu">#</a>
    <a class="navbar-brand" href="#">
      <img src="../assets/YouTube-Logo.wine.svg" alt="Logo" width="100" height="24" class="d-inline-block align-text-top">
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

</template>

<style scoped>

main{
  display: grid;
  grid-template-columns: 130px 1fr;
}
#enlaces{
  position: absolute;
  bottom: 10px;
  right: 0;
  padding: 20px;
}
#enlaces figure{
  padding: 10px;

}
body {
  background-color: #FFF;
}

ion-icon {
  padding: 5px;
}

#Buscador {
  display: flex;
}
#Buscador input {
  width: 20rem;
}

fiugre-container {
  display: flex;
  width: 15rem;
}


/*# sourceMappingURL=style.css.map */

</style>