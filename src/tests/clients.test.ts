import { beforeEach, describe, expect, test } from 'vitest';
import { useClientsStore } from '../stores/clients';
import { ClientType } from '../types';
import { createPinia, setActivePinia } from 'pinia';

describe('Client tests', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
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
})
