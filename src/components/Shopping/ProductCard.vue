<script lang="ts">

    import type { Product } from "@/models/Product";
import { useCartStore } from "@/stores/cart";
    import type { PropType } from "vue";

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
                // this.$emit('addProduct') // evento que sirve para enviar un evento desde el hijo al padre
                const cartStore = useCartStore();
                cartStore.addProduct(this.product);
            }
        }
    }
</script>

<template>

    <v-card :title = "product.name">
        
        <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
            >
        </v-img>
        
        <v-card-text>
            <p class="mb-3">
                Este es un texto de descripcion
            </p>
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>
        
        <v-card-actions>
            <v-btn @click="AddToCart" color="orange-lighten-3">
                Add to Cart
            </v-btn>
        </v-card-actions>

    </v-card>
</template>