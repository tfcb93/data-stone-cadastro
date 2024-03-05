import { beforeEach, describe, expect, test } from "vitest";
import { createPinia, setActivePinia } from 'pinia';
import { useProductsStore } from "../stores/products";
import { ProductType } from "../types";

describe('Product tests', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test('Creates a new product', () => {
        const store = useProductsStore();

        const product1: ProductType = {name: "Pencil", active: true};

        store.create(product1);

        expect(store.products).toEqual(expect.arrayContaining(
            [
                expect.objectContaining(product1)
            ]
        ));
    });
    test('Removes an specific product from the list', () => {
        const store = useProductsStore();

        const product1: ProductType = {name: "Pencil", active: true};
        const product2: ProductType = {name: "Eraser", active: false};
        const product3: ProductType = {name: "Sharpner", active: false};

        store.create(product1);
        const product2Id: string = store.create(product2);
        store.create(product3);

        store.remove(product2Id);

        expect(store.products).toEqual(
            expect.arrayContaining(
            [
                expect.objectContaining(product1),
                expect.objectContaining(product3),
            ]
        ));
    });
    test('Updates an specific product with new data', () => {
        const store = useProductsStore();

        const product1: ProductType = {name: "Pencil", active: true};

        const product1Id: string = store.create(product1);

        store.update(product1Id, {...product1, name: "Eraser"})

        expect(store.products).toEqual(
            expect.arrayContaining(
            [
                expect.objectContaining({...product1, name: "Eraser"})
            ]
        ));
    });
});