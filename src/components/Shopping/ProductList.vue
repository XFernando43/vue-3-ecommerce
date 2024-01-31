<script lang="ts">
    import ProductCard from './ProductCard.vue';
    import { useProductStore } from '@/stores/product';
    import { mapState } from 'pinia';

    export default{
        components:{
            ProductCard
        },
        mounted(){
            console.log("Mensaje de inicio")
        },
        computed:{
            ...mapState(useProductStore,['products'])
        }
    }
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.productId" cols="3">
            <ProductCard :product="p"
            />

        </v-col>
    </v-row>
</template>