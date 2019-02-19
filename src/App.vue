<template>
  <div id="app">
  <product-list-one ></product-list-one>  
  <product-list-two ></product-list-two>
 
  </div>
</template>

<script>
import ProductListTwo from './components/ProductListTwo.vue'
import ProductListOne from './components/ProductListOne.vue'


export default {
  name: 'app',
  components: {
    ProductListTwo,
    ProductListOne
  }
}
</script>

<style>
#app {
  font-family: ubuntu;
  color: #555;
}
</style>
