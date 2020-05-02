<template>
  <div id="container">
      <app-header></app-header>
      <hr>
      <app-contents></app-contents>
      <hr>
      <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './Header.vue'
import Contents from './Contents.vue'
import Footer from './Footer.vue'

export default {
  components: {
    "app-header"    : Header, 
    "app-contents"  : Contents, 
    "app-footer"    : Footer, 
  }
}

</script>

<style scoped>
</style>
