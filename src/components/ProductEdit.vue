<script setup lang="ts">
    import { useProductsStore } from '../stores/products';


    const props = defineProps<{
        id: string,
        closeEditing: () => void
    }>();

    const productName = defineModel('productName',{required: true, type: String});
    const productActive = defineModel('productActive', {required: true, type:Boolean});

    const store = useProductsStore();

    const saveProduct = () => {
        store.update(props.id,{
            name: productName.value!,
            active: productActive.value!
        });

        props.closeEditing();
    }

</script>

<template>
    <v-card class="pa-4">
        <v-card-title>
            Editar Produto
        </v-card-title>
        <v-text-field label="Nome" v-model="productName"></v-text-field>
        <v-switch
            v-model="productActive"
            color="primary"
            :label="productActive ? 'Ativo' : 'Inativo'"
            inset
        ></v-switch>
        <v-card-actions>
            <v-btn color="primary" @click="saveProduct" variant="flat">Salvar</v-btn>
            <v-btn @click="props.closeEditing" variant="flat">Cancelar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>