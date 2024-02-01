<script lang="ts">
import { useProductStore } from '@/stores/product';
import { mapActions,mapState } from 'pinia';

    export default{
        methods:{
            ...mapActions(useProductStore,['orderByName','orderByPrice','orderByNameDesc','orderByPriceDesc'])
            // ...mapActions(useProductStore,['orderByName','orderByPrice'])
        },
        computed:{
            ...mapState(useProductStore,['order'])
        }
    }
</script>

<template>
    <!-- ordenar por precio y nombre -->

    <v-list-subheader>Order By </v-list-subheader>

    <v-list-item link @click="orderByPrice" :active=" order === 'price'">
        <v-list-item-title> Precio Mayor </v-list-item-title>
    </v-list-item> 

    <v-list-item link @click="orderByName" :active=" order === 'name'">
        <v-list-item-title> Nombre(A-Z) </v-list-item-title>
    </v-list-item> 

    <v-list-item link @click="orderByPriceDesc" :active=" order === 'priceDesc'">
        <v-list-item-title> Más Economico </v-list-item-title>
    </v-list-item> 

    <v-list-item link @click="orderByNameDesc" :active=" order === 'nameDesc'">
        <v-list-item-title> Nombre(Z-A) </v-list-item-title>
    </v-list-item>
</template>