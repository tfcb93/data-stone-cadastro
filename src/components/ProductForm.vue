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
    <v-row no-gutters>
        <v-btn color="primary" @click="saveProduct" variant="flat">Cadastrar</v-btn>
        <v-btn class="ml-2" @click="closeModal" variant="flat">Cancelar</v-btn>
    </v-row>
</template>


<style scoped>
</style>