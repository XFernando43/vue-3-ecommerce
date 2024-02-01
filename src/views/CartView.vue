<script lang="ts">
    import ShoppingCartDetail from '@/components/Shopping/ShoppingCartDetail.vue';
    import SummaryCart from '@/components/Shopping/SummaryCart.vue';
    export default{
        data(){
            return{
                // details: <Array<CartDetail>>[]
            }
        },
        components:{
            ShoppingCartDetail,
            SummaryCart
        }
    }
</script>

<template>  

    <v-row>
        <v-col cols="12" sm="10" md="8" lg="8">
            <ShoppingCartDetail/>
        </v-col>

        <v-col cols="12" sm="2" md="4" lg="4">
            <SummaryCart />
        </v-col>
    </v-row>

</template>