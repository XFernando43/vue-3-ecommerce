<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { RouterLink } from 'vue-router'

    export default{
        data(){
            return{

            }
        },
        computed:{
          itemsCount(){
            const counCartStore = useCartStore();
            return counCartStore.cartItemsCount;
          }
        }
    }
</script>

<template>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
        class="me-4 "
        color="grey-darken-1"
        size="32"
        ></v-avatar>
        

        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home'" variant="text" @click = "navigate">Home</v-btn>
        </RouterLink>

        <RouterLink to="/Cart" custom v-slot="{navigate}">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="teal-accent-4">
            <v-btn prepend-icon="mdi-cart" :active="$route.name === 'Cart'" variant="text" @click = "navigate">Cart</v-btn>
          </v-badge>

        </RouterLink>

        <RouterLink to="/About" custom v-slot="{navigate}">
          <v-btn prepend-icon="mdi-information" :active="$route.name === 'About'" variant="text" @click = "navigate">About</v-btn>
        </RouterLink>

        <v-spacer></v-spacer>
        
        <v-responsive max-width="160">
          <v-text-field
          density="compact"
          flat
          hide-details
          label="Search"
          rounded="lg"
          single-line
          variant="solo-filled"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

</template>


