<script lang="ts">
import type { CartDetail } from '@/models/CartDetail';
import { useCartStore } from '@/stores/cart';
import type { PropType } from 'vue';

    export default{
        // props:{
        //     details:{
        //         type:Object as PropType<Array<CartDetail>>,
        //         required:true,
        //     }
        // },
        computed:{
            cartStore(){
                return useCartStore();
            },
            details(){
                return this.cartStore.details;
            }
        },
        methods:{
            decrementQuantity(productId:number){
                this.cartStore.decrement(productId);
            },
            incrementQuantity(productId:number){
                this.cartStore.increment(productId);
            },
            deleteProduct(productId:number){
                this.cartStore.deleteProduct(productId);
            }
        }
    }
</script>

<template>

    <v-card class="mt-4">
        <v-card-title> Productos agregados al carrito </v-card-title>
        <v-list>
            <v-list-item v-for="d in details" :value="d.productId">
                <v-list-item-title>
                    product:  {{ d.productId }}
                    (Qty):  {{ d.quantity }}
                    <v-btn @Click="decrementQuantity(d.productId)"> - </v-btn>
                    <v-btn @Click="incrementQuantity(d.productId)"> + </v-btn>
                    <v-btn @Click="deleteProduct(d.productId)" color="danger"> delete </v-btn>
                </v-list-item-title>
            
            </v-list-item>
        </v-list>
        
    </v-card>
</template>