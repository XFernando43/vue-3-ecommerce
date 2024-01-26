<script lang="ts">
    import type { Product } from '@/models/Product';
    import type { CartDetail } from '@/models/CartDetail';
    import ShoppingCartDetail from '../../components/Shopping/ShoppingCartDetail.vue';
    import ProductCard from './ProductCard.vue';

    export default{
        data(){
            return{
                products: <Array<Product>> [
                    {name:"Milanesa", price:1200, productId:1},
                    {name:"Mayonessa", price:1200, productId:2},
                    {name:"Girasol", price:1200, productId:3},
                    {name:"POP", price:1200, productId:4},
                ],
                details: <Array<CartDetail>>[]
            }
        },
        components:{
            ProductCard,
            ShoppingCartDetail
        },
        methods:{
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

        <v-container>

            <v-row>
                <v-col v-for="p in products" cols="3">
                    <ProductCard :product="p"
                        v-on:addProduct="onAddProduct(p.productId)"/>
                        <!-- @addProduct="onAddProduct(p.productId)"/> manera abreviada -->
                </v-col>
            </v-row>


            <ShoppingCartDetail :details="details"/>

            


        </v-container>

</template>