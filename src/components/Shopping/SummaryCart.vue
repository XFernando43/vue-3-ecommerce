<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

    export default{
        data(){
            return{

            }
        },
        computed:{
            ...mapState(useCartStore,['totalAmount'])
        }
    }
</script>


<template>
    <v-card class="mt-4">
        <v-card-title>
            Resumen de Compra
        </v-card-title>
        <v-card-subtitle>
            
            Total a pagar $ {{ totalAmount }}
            
        </v-card-subtitle>
        <v-card-text>
            <v-btn variant="tonal" color="blue-lighten-2">
                Realizar Pedido
            </v-btn>    
        </v-card-text>
    </v-card>
</template>