import type { CartDetail } from "@/models/CartDetail";
import type { Product } from "@/models/Product";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"

export const useCartStore = defineStore('cart',{
    state:()=>({
        // details: [] as CartDetail[]
        details: useLocalStorage<CartDetail[]>('cartDetails',[]),

    }),
    getters:{
        cartItemsCount: (state) => {
            let count = 0;
            state.details.forEach(detail=>{
                count+=detail.quantity;
            })
            return count;
        },
        totalAmount: (state) =>{
            let sum = 0;
            state.details.forEach(d=>{
                sum += d.product.price * d.quantity;
            })
            return sum;
        },
        whatsAppMessage(state){
            let message = 'Hola quiero realizar la siguiente compra:\n\n';
            message+= '_________ \n';
            state.details.forEach(d=>{
                message += `Producto: ${d.product.name}\n`;
                message += `Cantidad: ${d.quantity}\n`;
                message += `Precio: ${d.quantity * d.product.price}\n`;
                message += `_______________________\n`;
            });

            message += `Total a pagar: ${this.totalAmount} \n\n`;
            message += `Muchas Gracias :3`;

            return encodeURI(message);
        },
        whatsappLink(){
            return 'https://wa.me/51904717840?text=' + this.whatsAppMessage;
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