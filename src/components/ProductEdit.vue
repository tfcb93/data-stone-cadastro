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
    <v-card title="Editar Produto">
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

.product-edit--title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
}

.product-edit--container {
    display: flex;
}

.product-edit--form {
    display: flex;
    flex-direction: column;
}

.product-edit--options {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    gap: 5px;
    justify-content: start;
}

.product-edit--form-input:not(.product-edit--form-input__active) {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.product-edit--form-input__label {
    font-weight: bold;
}

.product-edit--form-input__active {
    display: flex;
}
</style>