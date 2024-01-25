<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from './Product';

    export default{
        props:{
            details:{
                type:Object as PropType<Array<CartDetail>>,
                required:true,
            }
        }
    }
</script>

<template>
    <p>Productos Added at cart</p>
    <ul>
        <li v-for="d in details">
            {{ d.productId }} (Quantity: {{ d.quantity }})
        </li>
    </ul>

</template>