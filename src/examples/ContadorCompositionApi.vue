
<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const count = ref(0);

    function aumentar(){
        count.value+=1;
    }

    onMounted(function(){
        console.log("El valor inicial del contador es 0");
    })

</script>

<template>
    <p> Hola soy la version de Composition API de VUe</p>
    <h1>{{ count }}</h1>


    <button @click="aumentar">Aumentar</button>
</template>