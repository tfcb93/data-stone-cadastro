import { defineStore } from "pinia";
import { ProductType } from "../types";
import { v4 as uuidv4 } from 'uuid';

export const useProductsStore = defineStore('products', {
    state: (): {products: Array<ProductType>} =>  {
        return({
            products: []
        })
    },
    actions: {
        create(newProduct: ProductType) {
            const newId = uuidv4();
            const newProductWithId: ProductType = {...newProduct, id: newId};
            this.products = [...this.products, newProductWithId];
            return newId;
        },
        update(id: string, data: ProductType) {
            this.products = this.products.map((product: ProductType) => {
                if(product.id === id) {
                    return data;
                }
                return product;
            });
        },
        remove(id: string) {
            const removeIndex = this.products.findIndex((product: ProductType) => product.id === id);
            this.products = [...this.products.slice(0, removeIndex), ...this.products.slice(removeIndex + 1)];
            return id;
        }
    }
});