<template>
    <div class="product-list-one">
        <h3>Product List One </h3>
        <ul>
           <li v-for="product in salesProducts" :key="product.id">
               <span class="name">{{ product.name }}</span>
               <span class="price"> $ {{ product.price }}</span>
             </li> 
        </ul>
        <button @click="reducePrice(4)">Reduce Price</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
   name: "ProductListOne",
   computed:{
       products(){
           return this.$store.state.products;
       },
       ...mapGetters([
           'salesProducts'
       ])
   },
   methods:{
    ...mapActions([
        'reducePrice'
    ])
   }
}
</script>
<style scoped>
.product-list-one ul{
    list-style: none;
    padding: 0;
}
.product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);

}
.price{
    font-weight: bold;
    color: #860CE8;
}
</style>
