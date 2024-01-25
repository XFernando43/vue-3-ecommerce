<script lang="ts">

    import type { PropType } from "vue";
    import type { Product } from "./Product";

    export default{
        props:{
            product:{
                type: Object as PropType<Product>,
                required:true
            }
        },
        emits:['addProduct'],
        methods:{
            AddToCart(){
                // console.log("Product " + this.product.productId + " Fue agregado al carrito");
                this.$emit('addProduct') // evento que sirve para enviar un evento desde el hijo al padre
            }
        }
    }
</script>

<template>
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    
    <button @click="AddToCart">
        Add to Cart
    </button>
    <hr>

</template>