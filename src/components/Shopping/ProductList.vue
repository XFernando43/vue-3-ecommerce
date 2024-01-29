<script lang="ts">
    import type { Product } from '@/models/Product';
    // import ShoppingCartDetail from '../../components/Shopping/ShoppingCartDetail.vue';
    import ProductCard from './ProductCard.vue';
    // import { useCartStore } from '@/stores/cart';

    export default{
        data(){
            return{
                products: [
                    {name:"Milanesa", price:1200, productId:1},
                    {name:"Mayonessa", price:1200, productId:2},
                    {name:"Girasol", price:1200, productId:3},
                    {name:"Monitor", price:1200, productId:5},
                    {name:"PSP", price:1200, productId:6},
                    {name:"PSP Vita", price:1200, productId:7},
                    {name:"Gtx 1650", price:1200, productId:8},
                    {name:"Laptop Lenovo Ideapad", price:1200, productId:9},
                    {name:"Laptop Pavilion HP", price:1200, productId:10},
                    {name:"GtX 4050TI", price:1200, productId:11},
                    {name:"Laptop Lenovo Ideapad", price:1200, productId:12},
                    {name:"Laptop Lenovo Ideapad", price:1200, productId:13},
                    {name:"Laptop Lenovo Ideapad", price:1200, productId:14},
                ] as Product[],
                  
            }
        },
        components:{
            ProductCard,
            // ShoppingCartDetail
        },
        methods:{
            // onAddProduct(productId:number){
            //     // const cartStore = useCartStore();
            //     const product = this.products.find(p=>p.productId === productId);
            //     console.log("ACA --> ",product);
            //     // const product: Product = {
            //     //     productId:product?.productId,
            //     //     name:product?.name
            //     // }
            //     // cartStore.addProduct(product);
            // }
        },
        mounted(){ // solo se ejecuta al inicio
            console.log("Mensaje de inicio")
        }
    }
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.productId" cols="3">
            <ProductCard :product="p"
            />
                <!-- v-on:addProduct="onAddProduct(p.productId)" -->
                <!-- @addProduct="onAddProduct(p.productId)"/> manera abreviada -->
        </v-col>
    </v-row>
</template>