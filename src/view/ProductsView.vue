<script setup lang="ts">

import ProductCard from '../components/ProductCard.vue';
import ProductEdit from '../components/ProductEdit.vue';
import { useProductsStore } from '../stores/products';
import { ref } from 'vue';

    const isEditing = ref<null|string>(null);

    const store = useProductsStore();

    const openEditing = (id: string) => {
        isEditing.value = id;
    }

    const closeEditing = () => {
        isEditing.value = null;
    }

    

</script>

<template>
    <div v-if="store.products.length <= 0">
        Não há produtos cadastrados
    </div>

    <v-container>
        <v-row no-gutters>
            <v-col
                v-for="(product, index) in store.products"
                :key="product.id"
                cols="8"
                md="4"
            >
                <v-sheet class="ma-2 pa-2">
                    <ProductEdit
                        v-if="isEditing === product.id"
                        :product-name="product.name"
                        :product-active="product.active"
                        :id="product.id!"
                        :close-editing="closeEditing"
                    />
                    <ProductCard v-else :product="product" :edit="() => openEditing(product.id!)"/>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.productsView--product-container__title {
    font-weight: regular;
}

.productsView--product-options {
    display: flex;
    flex-direction: column;
}

.productsView--product-container__data {
    font-weight: bold;
}
</style>