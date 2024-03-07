import { beforeEach, describe, expect, test } from 'vitest';
import { useClientsStore } from '../stores/clients';
import { ClientType } from '../types';
import { createPinia, setActivePinia } from 'pinia';
import { useProductsStore } from '../stores/products';

describe('Client tests', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test('Creates a new client', () => {
        const store = useClientsStore();
        const newUser: ClientType = {name: 'Test Testerson', document: 'blank', telephone: '888-8888', email: 'testerson@test.com', active: true};
        
        store.create(newUser);
    
        expect(store.clients).toEqual(
            expect.arrayContaining(
                [
                    expect.objectContaining(newUser)
                ]
            )
        )
    });
    test('Removes an specific client from the list', () => {
        const store = useClientsStore();
        const user1: ClientType = {name: 'Test Testerson', document: 'blank', telephone: '888-8888', email: 'testerson@test.com', active: true};
        const user2: ClientType = {name: 'John Doe', document: 'blank', telephone: '999-9999', email: 'johndoe@test.com', active: true};
        const user3: ClientType = {name: 'Jane Smith', document: 'blank', telephone: '111-1111', email: 'janesmith@test.com', active: true};
        
        store.create(user1);
        const user2Id = store.create(user2);
        store.create(user3);

        store.remove(user2Id);

        expect(store.clients).toEqual(
            expect.arrayContaining(
                [
                    expect.objectContaining(user1),
                    expect.objectContaining(user3),
                ]
            )
        )
    });
    test('Updates an specific client with new data', () => {
        const store = useClientsStore();
        const user1:ClientType = {name: 'John Doe', document: 'blank', telephone: '999-9999', email: 'johndoe@test.com', active: true};

        const user1Id = store.create(user1);

        store.update(user1Id, {...user1, email: 'superjohndoebros@test.com'});

        expect(store.clients).toEqual(
            expect.arrayContaining(
                [
                    expect.objectContaining({...user1, email: 'superjohndoebros@test.com'})
                ]
            )
        )
    });
    test('Adds products to a client', () => {

        const clientStore = useClientsStore();
        const productStore = useProductsStore();

        const client1Id: string = clientStore.create({name: 'John Doe', document: 'blank', telephone: '999-9999', email: 'johndoe@test.com', active: true});
        const product1Id: string = productStore.create({name: "Pencil", active: true});
        const product2Id: string = productStore.create({name: "Eraser", active: false});
        const product3Id: string = productStore.create({name: "Sharpner", active: false});

        clientStore.addProducts(client1Id, [product1Id, product2Id, product3Id]);

        expect(clientStore.clients).toEqual(
            expect.arrayContaining(
                [
                    expect.objectContaining(
                        {
                            id: client1Id,
                            name: 'John Doe',
                            document: 'blank',
                            telephone: '999-9999',
                            email: 'johndoe@test.com',
                            active: true,
                            products: [product1Id, product2Id, product3Id]
                        }
                    )
                ]
            )
        )
    });

    test('Remove products from a client', () => {
        const clientStore = useClientsStore();
        const productStore = useProductsStore();

        const client1Id: string = clientStore.create({name: 'John Doe', document: 'blank', telephone: '999-9999', email: 'johndoe@test.com', active: true});
        const product1Id: string = productStore.create({name: "Pencil", active: true});
        const product2Id: string = productStore.create({name: "Eraser", active: false});
        const product3Id: string = productStore.create({name: "Sharpner", active: false});

        clientStore.addProducts(client1Id, [product1Id, product2Id, product3Id]);

        clientStore.removeProducts(client1Id, [product2Id]);

        expect(clientStore.clients).toEqual(
            expect.arrayContaining(
                [
                    expect.objectContaining(
                        {
                            id: client1Id,
                            name: 'John Doe',
                            document: 'blank',
                            telephone: '999-9999',
                            email: 'johndoe@test.com',
                            active: true,
                            products: [product1Id, product3Id]
                        }
                    )
                ]
            )
        )

    });
    

});
