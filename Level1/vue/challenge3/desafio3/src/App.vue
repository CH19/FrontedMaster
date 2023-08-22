<script setup>
  import videos from './components/videos.vue';
  import headerYt from './components/headerYt.vue';
  import selectores from './components/selectores.vue';
</script>

<template>
  <div id="BigContainer">
    <header-yt>
    </header-yt>
    <main class="main">
      <selectores></selectores>
      <videos></videos>

  </main>
  </div>
</template>

<style scoped>
.main{
  display: grid;
  grid-template-columns: 130px 1fr;

}
</style>
