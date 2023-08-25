<template>
  <div id="containerBig">
    <slot name="cards" id="cards"></slot>
    <slot name="list" id="list"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #containerBig{
        display: grid;
        grid-template-columns: 1fr 200px;
    }
</style>