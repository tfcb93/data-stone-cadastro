import { defineStore } from "pinia";
import { ClientType, ProductType } from "../types";
import { v4 as uuidv4 } from 'uuid';

export const useClientsStore = defineStore('clients', {
    state: (): {clients: Array<ClientType>} => {
        return ({
            clients: []
        })
    },
    actions:{
        create(newClient: ClientType) {
            const newId: string =  uuidv4();
            const newClientWithUUID:ClientType = {...newClient, id: newId, products: []}
            this.clients = [...this.clients, newClientWithUUID];
            return newId;
        },
        update(id: string, data: ClientType) {
            this.clients = this.clients.map((client: ClientType) => {
                if(client.id === id) {
                    return {...data, id, products: client.products};
                }
                return client;
            });
        },
        remove(id: string) {
            const removeIndex = this.clients.findIndex((client: ClientType) => client.id === id);
            this.clients = [...this.clients.slice(0, removeIndex), ...this.clients.slice(removeIndex + 1)];
            return id;
        },
        addProducts(id: string, products: Array<string>) {
            this.clients = this.clients.map((client: ClientType) => {
                if(client.id === id) {
                    return({...client, products:[...client.products!, ...products]});
                }
                return client;
            });
        },
        removeProducts(id: string, products: Array<string>) {
            this.clients = this.clients.map((client: ClientType) => {
                if(client.id === id) {
                    const actualProducts: Array<string> = client.products?.filter((product) => !products.includes(product)) || [];
                    return({...client, products: [...actualProducts]});
                }
                return client;
            });
        }
    }
});
