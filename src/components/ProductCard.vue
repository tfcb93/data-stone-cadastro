<script setup lang="ts">
import { ProductType } from '../types';


    defineProps<{product: ProductType}>();

</script>

<template>
    <div class="productcard">
        <div class="productcard--data productcard--data__name">
            <span class="productcard--data__title">Nome: </span>
            <span class="productcard--data__data">
                {{ product.name }}
            </span>
        </div>
        <div class="productcard--data productcard--data__active">
            <span class="productcard--data__title">Ativo: </span>
            <span class="productcard--data__data">
                {{ product.active ? "Sim" : "Não" }}
            </span>
        </div>
    </div>
</template>

<style scoped>

.productcard {
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.productcard--data__title {
    font-weight: bold;
}

</style>