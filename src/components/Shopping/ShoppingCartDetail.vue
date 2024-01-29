<script lang="ts">
    import { useCartStore } from '@/stores/cart';

    export default{
        // props:{
        //     details:{
        //         type:Object as PropType<Array<CartDetail>>,
        //         required:true,
        //     }
        // },
        computed:{
            cartStore(){
                return useCartStore();
            },
            details(){
                return this.cartStore.details;
            }
        },
        methods:{
            decrementQuantity(productId:number){
                this.cartStore.decrement(productId);
            },
            incrementQuantity(productId:number){
                this.cartStore.increment(productId);
            },
            deleteProduct(productId:number){
                this.cartStore.deleteProduct(productId);
            }
        }
    }
</script>

<template>

    <v-card class="mt-4">
        <v-card-title> Productos agregados al carrito </v-card-title>

        <v-card-text>
            <v-list v-if="details.length > 0">
                <v-list-item v-for="d in details" :key="d.productId">
                    <v-list-item-title>
                        product:  {{ d.productId }}
                        (Qty):  {{ d.quantity }}
                        <v-btn size="x-small" icon="mdi-minus" @Click="decrementQuantity(d.productId)">  </v-btn>
                        <v-btn size="x-small" icon="mdi-plus" @Click="incrementQuantity(d.productId)">  </v-btn>
                        <v-btn size="x-small" icon="mdi-delete" @Click="deleteProduct(d.productId)" color="danger">  </v-btn>
                    </v-list-item-title>
                
                </v-list-item>
            </v-list>

            <p v-else>
                Aun no has agregado items a tu carrito de compras.
                Has 

                <RouterLink to="/">
                    <v-btn color="#5865f2">
                        click aqui
                    </v-btn>
                </RouterLink>

                para ver los productos disponibles
            </p>
        </v-card-text>
                
    </v-card>
</template>