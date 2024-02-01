import type { Category } from "@/models/Category";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore('categories',{
    state:()=>({
        _categories:[{
            CategoryId:1,
            CategoryName:"Tecnologia",
            CategoryDescription: "Productos de tecnologia de toda indole desde gaming hasta oficina y del hogar",
        },
        {
            CategoryId:2,
            CategoryName:"Toys",
            CategoryDescription: "Productos para el entretinimiento",
        },
        {
            CategoryId:3,
            CategoryName:"Gaming",
            CategoryDescription: "Articulos para el juegos",
        },
        {
            CategoryId:4,
            CategoryName:"Home",
            CategoryDescription: "Productos del hogar",
        },
        ] as Category[]
    }),
    getters:{
       
    },
    actions:{
       
    }
})