<script setup lang="ts">
import { useProductsStore } from '../stores/products';


    const productName = defineModel('productName',{type: String});
    const productActive = defineModel('productActive', {default: true, type:Boolean});

    const props = defineProps<{
        closeModal: () => void
    }>();

    const store = useProductsStore();

    const saveProduct = () => {
        store.create({
            name: productName.value!,
            active: productActive.value!
        });

        props.closeModal();
    }

</script>

<template>
    <v-text-field label="Nome" v-model="productName"></v-text-field>
    <v-switch
        v-model="productActive"
        color="primary"
        :label="productActive ? 'Ativo' : 'Inativo'"
        inset
    ></v-switch>
    <v-btn color="primary" @click="saveProduct">Cadastrar</v-btn>
</template>


<style scoped>
</style>