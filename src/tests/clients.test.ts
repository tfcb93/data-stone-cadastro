import { beforeEach, describe, expect, test } from 'vitest';
import { useClientsStore } from '../stores/clients';
import { ClientType } from '../types';
import { createPinia, setActivePinia } from 'pinia';

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
    })
    

})
