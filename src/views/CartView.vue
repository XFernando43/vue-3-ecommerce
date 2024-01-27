<script lang="ts">
    import ShoppingCartDetail from '@/components/Shopping/ShoppingCartDetail.vue';
    import type { CartDetail } from '@/models/CartDetail';
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

    <ShoppingCartDetail/>

</template>