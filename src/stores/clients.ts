import { defineStore } from "pinia";
import { ClientType } from "../types";
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
            const newClientWithUUID:ClientType = {...newClient, id: newId}
            this.clients = [...this.clients, newClientWithUUID];
            return newId;
        },
        read() {
    
        },
        update(id: string, data: ClientType) {
            this.clients = this.clients.map((client: ClientType) => {
                if(client.id === id) {
                    return data;
                }
                return client;
            });
        },
        remove(id: string) {
            const removeIndex = this.clients.findIndex((client) => client.id === id);
            this.clients = [...this.clients.slice(0, removeIndex), ...this.clients.slice(removeIndex + 1)];
            return id;
        }
    }
});
