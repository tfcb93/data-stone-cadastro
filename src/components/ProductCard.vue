<script setup lang="ts">
import { useProductsStore } from '../stores/products';
import { ProductType } from '../types';


    const props = defineProps<{
        product: ProductType,
        edit: () => void
    }>();

    const store = useProductsStore();


</script>

<template>
    <v-card :variant="product.active ? 'elevated' : 'tonal'">
        <template v-slot:title>
            {{ product.name }}
        </template>
        <template v-slot:subtitle>
            Ativo: {{ product.active ? "Sim" : "Não" }}
        </template>
        <v-card-actions>
            <v-btn colort="primary" text="editar" @:click="props.edit" variant="flat"></v-btn>
            <v-btn color="red-accent-4" text="Excluir" @:click="() => store.remove(product.id!)" variant="flat"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>