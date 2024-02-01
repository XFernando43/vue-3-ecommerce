<script lang="ts">
    import type { Category } from '@/models/Category';
    import OrderOptions from './OrderOptions.vue';
    export default{
        data(){
            return{
                categories:[{
                    CategoryId:1,
                    CategoryName:"Tecnologia",
                    CategoryDescription: "Productos de tecnologia de toda indole desde gaming hasta oficina y del hogar",
                },
                {
                    CategoryId:2,
                    CategoryName:"Toys",
                    CategoryDescription: "Productos para el entretinimiento",
                },
                {
                    CategoryId:3,
                    CategoryName:"Gaming",
                    CategoryDescription: "Articulos para el juegos",
                },
                {
                    CategoryId:4,
                    CategoryName:"Home",
                    CategoryDescription: "Productos del hogar",
                },
                ] as Category[]
            }
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
                <v-list-item v-for="category in categories" :key="category.CategoryId" link @click="goToCategory(category.CategoryId)" :active="$route.name==='category' && Number($route.params.categoryId) === category.CategoryId">       
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