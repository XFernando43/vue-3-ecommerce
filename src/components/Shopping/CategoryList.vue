<script lang="ts">
    import { useCategoryStore } from '@/stores/category';
    import OrderOptions from './OrderOptions.vue';
    import { mapState } from 'pinia';
    export default{
        computed:{
            ...mapState(useCategoryStore,['_categories'])
        },
        methods:{
            clearCategory(){
                this.$router.push({
                    name:'home'
                })
            },
            goToCategory(categoryId: number){
                this.$router.push({
                    name:'category',params:{categoryId:categoryId}
                })
            },
        },
        components:{
            OrderOptions
        }
    }
</script>

<template>
    <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="category in _categories" :key="category.CategoryId" link @click="goToCategory(category.CategoryId)" :active="$route.name==='category' && Number($route.params.categoryId) === category.CategoryId">       
                    <v-list-item-title>{{ category.CategoryName }}</v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <!-- refresh categories -->
                <v-list-item color="grey-lighten-4" link title="Refresh" @click="clearCategory()"
                ></v-list-item>

                <v-divider class="my-2"></v-divider>

                <OrderOptions/>


              </v-list>
    </v-sheet>
</template>