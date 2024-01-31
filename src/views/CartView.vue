<script lang="ts">
    import ShoppingCartDetail from '@/components/Shopping/ShoppingCartDetail.vue';
    export default{
        data(){
            return{
                // details: <Array<CartDetail>>[]
            }
        },
        components:{
            ShoppingCartDetail,
        }
    }
</script>

<template>  

    <v-row>
        <v-col cols="8">
            <ShoppingCartDetail/>
        </v-col>

    </v-row>

</template>