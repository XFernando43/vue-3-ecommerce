<script lang="ts">
    import type { Product } from '@/models/Product';
    // import ShoppingCartDetail from '../../components/Shopping/ShoppingCartDetail.vue';
    import ProductCard from './ProductCard.vue';
    // import { useCartStore } from '@/stores/cart';

    export default{
        data(){
            return{
                products: [
                    {name:"Laptop Lenovo", price:1200, productId:1, imgURL: "https://p2-ofp.static.pub/fes/cms/2023/04/05/w0tcj8z4uucju3a26629yu5avfjzy5086363.png"},
                    {name:"Ipad", price:1200, productId:2, imgURL: "https://www.macworld.com/wp-content/uploads/2023/01/review-apple-ipad-mini-6-1.jpg?resize=1200%2C675&quality=50&strip=all"},
                    {name:"Monitor LG ", price:1200, productId:3, imgURL: "https://www.lg.com/content/dam/channel/wcms/pe/images/monitores/24mk430h-b_awf_espr_pe_c/450_01.jpg"},
                    {name:"Monitor Chamchung", price:1200, productId:5, imgURL: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_121406678_3022642_1?wid=1500&hei=1500&qlt=70"},
                    {name:"PSP", price:1200, productId:6, imgURL: "https://m.media-amazon.com/images/I/81tUYQktC6L._SL1500_.jpg"},
                    {name:"PSP Vita", price:1200, productId:7, imgURL: "https://i.blogs.es/aefd03/sony_ps_vita/1366_2000.jpg"},
                    {name:"Gtx 1650", price:1200, productId:8, imgURL: "https://static.gigabyte.com/StaticFile/Image/Global/7928f866b07b80749e84c678e54b9fec/Product/24772/png/2000"},
                    {name:"Laptop Lenovo Ideapad", price:1200, productId:9, imgURL: "https://www.mundolaptops.com/wp-content/uploads/2022/10/Laptop-Lenovo-IdeaPad-Gaming-3-15IHU6-Intel-Core-i5-11300H.jpg"},
                    {name:"Laptop Pavilion HP", price:1200, productId:10, imgURL: "https://inversionesvaremat.com/wp-content/uploads/2021/11/New-Project-60.jpg"},
                    {name:"GtX 4090TI", price:1200, productId:11, imgURL: "https://staticg.sportskeeda.com/editor/2023/01/d819e-16749332125176-1920.jpg"},
                ] as Product[],
                  
            }
        },
        components:{
            ProductCard,
            // ShoppingCartDetail
        },
        methods:{
            // onAddProduct(productId:number){
            //     // const cartStore = useCartStore();
            //     const product = this.products.find(p=>p.productId === productId);
            //     console.log("ACA --> ",product);
            //     // const product: Product = {
            //     //     productId:product?.productId,
            //     //     name:product?.name
            //     // }
            //     // cartStore.addProduct(product);
            // }
        },
        mounted(){ // solo se ejecuta al inicio
            console.log("Mensaje de inicio")
        }
    }
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.productId" cols="3">
            <ProductCard :product="p"
            />
                <!-- v-on:addProduct="onAddProduct(p.productId)" -->
                <!-- @addProduct="onAddProduct(p.productId)"/> manera abreviada -->
        </v-col>
    </v-row>
</template>