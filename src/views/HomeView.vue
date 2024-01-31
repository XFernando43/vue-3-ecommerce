<script lang="ts">
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
            const productStore = useProductStore();
            const categoryId = Number(to.params.categoryId);
            productStore.selectCategoryId(categoryId);
        },
        beforeRouteUpdate(to){
            const productStore = useProductStore();
            const categoryId = Number(to.params.categoryId);
            productStore.selectCategoryId(categoryId);
          }

      }
</script>

<template>
  
    <v-row>
        <v-col cols="2">
            <CategoryList/>
        </v-col>
        <v-col cols="10">
            <ProductList></ProductList>
        </v-col>
    </v-row>



</template>

