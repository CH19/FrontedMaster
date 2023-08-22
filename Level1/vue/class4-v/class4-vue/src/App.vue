<script setup>
import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)
const items = ref(['Christian', 'Juan', 'Fabian', 'Juana', 'Daniel']);
const itemsRef = ref([])
onMounted(() => {
  input.value.style.background = 'red';
  input.value.style.color = '#FFF';
  input.value.focus();
  console.log('componente funcionando');

  itemsRef.forEach(item => {
    item.value.style.color = 'green';
  })
})
</script>

<template>
  <div id="BigContainer">
    <input type="text" ref="input">
    <button>send</button>
    <div v-for="(item, index) in items" :key="index" ref="itemsRef">
      <h2>{{ item }}</h2>
    </div>
  </div>
</template>