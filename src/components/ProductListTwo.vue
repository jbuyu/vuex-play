<template>
    <div class="product-list-two">
        <h3>Product List Two</h3>
        <ul>
            <li v-for="product in salesProducts" :key="product.id">
                <span class="name"> {{ product.name }} </span>
                <span class="price"> $ {{ product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ProductListTwo",
    computed: {
       salesProducts(){
           return this.$store.getters.salesProducts;
       }
    },
    methods:{
      
    }
        
    
}
</script>

<style scoped>
.product-list-two ul{
    list-style: block;
    padding: 0;
    list-style: none;
}
.product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);

}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>