<script lang="ts">
import CardTemplate from './CardTemplate.vue';
import Cart from './Cart.vue';
import type { CartDetail, Product } from './Product';

    export default{
        data(){
            return{
                count:0,
                products: <Array<Product>> [
                    {name:"Milanesa", price:1200, productId:1},
                    {name:"Mayonessa", price:1200, productId:2},
                    {name:"Girasol", price:1200, productId:3},
                    {name:"POP", price:1200, productId:4},
                ],
                details: <Array<CartDetail>>[
                    {productId:2, quantity:12},
                    
                ]
            }
        },
        components:{
            CardTemplate,
            Cart
        },
        methods:{
            increse(){
                this.count+=1;
            },
            decrese(){
                this.count-=1;
            },
            onAddProduct(productId:number){
                const productFinded = this.details.find(d=> d.productId === productId);

                if(productFinded){
                    productFinded.quantity+=1;
                }else{
                    this.details.push({
                        productId,
                        quantity:1,
                    })
                }
            }
        },
        mounted(){ // solo se ejecuta al inicio
            console.log("Mensaje de inicio")
        }
    }
</script>

<template>
    <h1>Este es un ejemplo con Api Composition</h1>
    <h1>Hola Mundo {{ count }}</h1>
    <button @click="increse">
        Aumentar
    </button>

    <h2 v-if="count %2 == 0">es par</h2>
    <h2 v-if="count %2 !== 0">es inpar</h2>

    <ul>
        <CardTemplate v-for="p in 
        products" :product="p"
        v-on:addProduct="onAddProduct(p.productId)"/>
        <!-- @addProduct="onAddProduct(p.productId)"/> manera abreviada -->
    </ul>


    <Cart :details="details"/>

</template>