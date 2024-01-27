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
            details(){
                const cartStore = useCartStore();
                return cartStore.details;
            }
        }
    }
</script>

<template>

    <v-card class="mt-4">
        <v-card-title> Productos agregados al carrito </v-card-title>
        <!-- <v-card-text> <p>Productos agregados al carrito</p> </v-card-text> -->

        <v-list>
            <v-list-item v-for="d in details" :value="d.productId">
                <v-list-item-title>
                    product:  {{ d.productId }}
                    quantity:  {{ d.quantity }}
                </v-list-item-title>
            
            </v-list-item>
        </v-list>
        
    </v-card>
</template>