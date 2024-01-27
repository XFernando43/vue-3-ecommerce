<script lang="ts">
  import { RouterView } from 'vue-router'
  import TopBar from './components/Common/TopBar.vue';
  export default{
    data(){
      return{
        details:[{productId:12,quantity:2}]
      }
    },
    components:{
      TopBar
    }
  }
</script>

<template>
  
  <v-app>
    <TopBar></TopBar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <RouterView :details="details"/>
      </v-container>
    </v-main>

  </v-app>
        
</template>
