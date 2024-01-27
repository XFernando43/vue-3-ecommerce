import type { CartDetail } from "@/models/CartDetail";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state:()=>({
        details: <Array<CartDetail>>[{
            productId:12,
            quantity:200,
        }]
    }),
    getters:{

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
        }
    }
})