<script setup lang="ts">
    import { useProductsStore } from '../stores/products';


    const props = defineProps<{
        id: string,
        closeEditing: () => void
    }>();

    const productName = defineModel('productName',{required: true, type: String});
    const productActive = defineModel('productActive', {required: true, type:Boolean});

    const store = useProductsStore();

    const saveproduct = () => {
        store.update(props.id,{
            name: productName.value!,
            active: productActive.value!
        });

        props.closeEditing();
    }

    const cancelEdit = () => {
        props.closeEditing();
    }

</script>

<template>
    <div>
        <div class="product-edit--title">
            Editar produto
        </div>
        <div class="product-edit--container">
            <div class="product-edit--form">
                <span class="product-edit--form-input">
                    <label class="product-edit--form-input__label" for="name">Nome: </label>
                    <input v-model="productName" id="name" type="text" />
                </span>
                <span class="product-edit--form-input product-edit--form-input__active">
                    
                    <legend>Ativo: </legend>
                    <span>
                        <input id="active-yes" type="radio" v-model="productActive" :value="true" />
                        <label for="active-yes">Sim</label>
                    </span>
                    <span>
                        <input id="active-no" type="radio" v-model="productActive" :value="false" />
                        <label for="active-no">Não</label>
                    </span>
                </span>
            </div>
            <div class="product-edit--options">
                <button v-on:click="saveproduct">
                    Atualizar
                </button>
                <button v-on:click="cancelEdit">
                    Cancelar
                </button>
            </div>
        </div>
    </div>

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