import { defineStore } from "pinia";
import { ClientType } from "../types";

export const useClientsStore = defineStore('clients', {
    state: (): {clients: Array<ClientType>} => {
        return ({
            clients: []
        })
    },
    actions:{
        create(newClient: ClientType) {
            this.clients = [...this.clients, newClient];
        },
        read() {
    
        },
        update() {
    
        },
        remove() {
    
        }
    }
});