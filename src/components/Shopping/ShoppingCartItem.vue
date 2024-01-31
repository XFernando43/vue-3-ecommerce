<script lang="ts">
import type { CartDetail } from '@/models/CartDetail';
import type { PropType } from 'vue';
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cart';

    export default{
        data(){
            return{

            }
        },
        props:{
            detail:{
                type: Object as PropType<CartDetail>,
                required:true,
            }
        },
        methods:{           
            ...mapActions(useCartStore,{
                decrementQuantity:'increment',
                incrementQuantity:'increment',
                deleteProduct: 'deleteProduct',
            })
        }
    }
</script>

<template>

    <tr>
        <td>
            <v-avatar size="40px">
                <v-img :src="detail.product.imgURL"></v-img>
            </v-avatar>
        </td>
        <td>
            <v-btn size="x-small" icon="mdi-minus" @Click="decrementQuantity(detail.product.productId)">  </v-btn>
            quantity {{ detail.quantity }}
            <v-btn size="x-small" icon="mdi-plus" @Click="incrementQuantity(detail.product.productId)">  </v-btn>
        </td>

        <td>
           ${{ detail.product.price }}
        </td>

        <td>
            $ {{ detail.product.price * detail.quantity }}
        </td>

        <td>
            <v-btn size="x-small" icon="mdi-delete" @Click="deleteProduct(detail.product.productId)" color="danger">  </v-btn>
        </td>
    </tr>

   
</template>



<!-- <v-list-item>
    <v-list-item-title>
        {{ detail.product.name }}
        (Qty):  {{ detail.quantity }}
       
    </v-list-item-title>
            
</v-list-item> -->