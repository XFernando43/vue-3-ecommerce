<script lang="ts">
import type { Category } from '@/models/Category';

    export default{
        data(){
            return{
                categories:[{
                    CategoryId:1,
                    CategoryName:"Tecnologia"
                },
                {
                    CategoryId:2,
                    CategoryName:"Toys"
                },
                {
                    CategoryId:3,
                    CategoryName:"Gaming"
                },
                {
                    CategoryId:2,
                    CategoryName:"Home"
                },
                ] as Category[]
            }
        }
    }
</script>

<template>
    <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="category in categories"
                  :key="category.CategoryId" link>
            
                    <v-list-item-title>{{ category.CategoryName }}</v-list-item-title>
                
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
    </v-sheet>
</template>