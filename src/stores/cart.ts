import type { CartDetail } from "@/models/CartDetail";
import type { Product } from "@/models/Product";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state:()=>({
        details: [] as CartDetail[]
    }),
    getters:{
        cartItemsCount: (state) => {
            let count = 0;
            state.details.forEach(detail=>{
                count+=detail.quantity;
            })

            return count;
        }
    },
    actions:{
        addProduct(product: Product){
            const productFinded = this.details.find(d=> d.product === product);
                if(productFinded){
                    productFinded.quantity+=1;
                }else{
                    this.details.push({
                        product,
                        quantity:1,
                    })
                }
        },
        increment(productId:number){
            const productFinded = this.details.find(d=> d.product.productId === productId);
            if(productFinded){
                productFinded.quantity+=1;
            }
            
        },
        decrement(productId:number){
            const productFinded = this.details.find(d=> d.product.productId  === productId);  
            if(productFinded && productFinded.quantity > 0){
                productFinded.quantity-=1;
            }
        },
        deleteProduct(productId:number){
            const index = this.details.findIndex(d => d.product.productId  === productId);
            if (index !== -1) { // Asegúrate de que se haya encontrado el producto
                this.details.splice(index, 1); // Utiliza splice para eliminar el producto del array
            }
        }
    }
})