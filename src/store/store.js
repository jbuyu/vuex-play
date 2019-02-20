import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export const store = new Vuex.Store({
state:{
    products: [
        {id: 1, name: 'avocado', price: 103},
        {id: 2, name: 'string-sauce', price: 200},
        {id: 3, name: 'summer-juice', price: 136},
        {id: 4, name: 'pinneaple', price: 43},
        {id: 5, name: 'mango', price: 100},
      ]
},
getters:{
saleProducts: state =>{
        let saleProducts = state.products.map(product=>{
            return {
                name: '**'+ product.name+'**',
                price: product.price/2
            }
        });
    return saleProducts;
}
},
mutations:{
    reducePrice: (state, payload) =>{
            state.products.forEach(product=>{
                product.price -= payload
            })
    }
},
actions:{
reducePrice: (context,payload) =>{
    setTimeout(function (){
      context.commit('reducePrice',payload)  
    },2000);
}
}
})