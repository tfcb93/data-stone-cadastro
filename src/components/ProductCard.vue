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
    <v-card>
        <template v-slot:title>
            {{ product.name }}
        </template>
        <v-card-text>
            Ativo: {{ product.active ? "Sim" : "Não" }}
        </v-card-text>
        <v-card-actions>
            <v-btn colort="primary" text="editar" @:click="props.edit"></v-btn>
            <v-btn color="warning" text="deletar" @:click="() => store.remove(product.id!)"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>