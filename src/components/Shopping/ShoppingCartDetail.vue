<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { mapState } from 'pinia';
    import ShoppingCartItemVue from './ShoppingCartItem.vue';

    export default{
    // props:{
    //     details:{
    //         type:Object as PropType<Array<CartDetail>>,
    //         required:true,
    //     }
    // },
    computed: {
        ...mapState(useCartStore, ['details'])
    },
    components: { ShoppingCartItemVue }
}
</script>

<template>

    <v-card class="mt-4">
        <v-card-title> Productos agregados al carrito </v-card-title>

        <v-card-text>

            <v-table v-if="details.length > 0">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>SubTotal</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                  <ShoppingCartItemVue
                    v-for="detail in details"
                    :key = "detail.product.productId"
                    :detail = "detail">

                    </ShoppingCartItemVue>
                </tbody>

            </v-table>

           
        </v-card-text>
                
    </v-card>
</template>







<!-- <p v-else>
    Aun no has agregado items a tu carrito de compras.
    Has 

    <RouterLink to="/">
        <v-btn color="#5865f2">
            click aqui
        </v-btn>
    </RouterLink>

    para ver los productos disponibles
</p> -->