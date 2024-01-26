<script lang="ts">
import CardTemplate from './CardTemplate.vue';
import Cart from './Cart.vue';
    export default{
        data(){
            return{
                count:0
            }
        },
        components:{
            CardTemplate,
            Cart
        },
        methods:{
            increse(){
                this.count+=1;
            },
            decrese(){
                this.count-=1;
            }
        },
        mounted(){ // solo se ejecuta al inicio
            console.log("Mensaje de inicio")
        }
    }
</script>

<template>
    <h1>Este es un ejemplo con Api Composition</h1>
    <h1>Hola Mundo {{ count }}</h1>
    <button @click="increse">
        Aumentar
    </button>

    <h2 v-if="count %2 == 0">es par</h2>
    <h2 v-if="count %2 !== 0">es inpar</h2>



</template>