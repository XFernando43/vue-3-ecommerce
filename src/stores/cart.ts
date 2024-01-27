import type { CartDetail } from "@/models/CartDetail";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state:()=>({
        details: <Array<CartDetail>>[{
            productId:1,
            quantity:10
        },
        {
            productId:2,
            quantity:10
        },
        {
            productId:3,
            quantity:10
        },
        {
            productId:4,
            quantity:10
        }]
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
        addProduct(productId:number){
            const productFinded = this.details.find(d=> d.productId === productId);
                if(productFinded){
                    productFinded.quantity+=1;
                }else{
                    this.details.push({
                        productId,
                        quantity:1,
                    })
                }
        },
        increment(productId:number){
            const productFinded = this.details.find(d=> d.productId === productId);
            if(productFinded){
                productFinded.quantity+=1;
            }
            
        },
        decrement(productId:number){
            const productFinded = this.details.find(d=> d.productId === productId);  
            if(productFinded && productFinded.quantity > 0){
                productFinded.quantity-=1;
            }
        },
        deleteProduct(productId:number){
            const index = this.details.findIndex(d => d.productId === productId);
            if (index !== -1) { // Asegúrate de que se haya encontrado el producto
                this.details.splice(index, 1); // Utiliza splice para eliminar el producto del array
            }
        }
    }
})