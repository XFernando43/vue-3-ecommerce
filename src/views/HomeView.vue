<script lang="ts">
    
    function updateCategoryFromRouterParams(categoryId: string|string[]){
        const productStore = useProductStore();
        productStore.selectCategoryId(Number(categoryId));
    }


    import { useProductStore } from '@/stores/product';
    import ProductList from '../components/Shopping/ProductList.vue';
    import CategoryList from '@/components/Shopping/CategoryList.vue';
      export default{
        data(){
            return{
            }
        },
        components:{
            ProductList,
            CategoryList
        },
        beforeRouteEnter(to){
            updateCategoryFromRouterParams(to.params.categoryId);
        },
        beforeRouteUpdate(to){
            updateCategoryFromRouterParams(to.params.categoryId);
        
        }

      }
</script>

<template>
  
    <v-row>
        <v-col cols="12" sm="3" md="2" lg="2">
            <CategoryList/>
        </v-col>
        <v-col cols="12" sm="9" md="10" lg="10">
            <ProductList></ProductList>
        </v-col>
    </v-row>



</template>

