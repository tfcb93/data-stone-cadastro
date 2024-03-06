<script setup lang="ts">
import { useProductsStore } from '../stores/products';


    const productName = defineModel('productName',{type: String});
    const productActive = defineModel('productActive', {default: true, type:Boolean});

    const props = defineProps<{
        closeModal?:any
    }>();

    const store = useProductsStore();

    const saveProduct = () => {
        store.create({
            name: productName.value!,
            active: productActive.value!
        });

        if(props.closeModal) {
            props.closeModal();
        }
    }

</script>

<template>
    <div class="product--form">
        <span class="product--form-input">
            <label for="name">Nome: </label>
            <input v-model="productName" id="name" type="text" />
        </span>
        <span class="product--form-input product--form-input__active">
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
    <div>
        <button v-on:click="saveProduct()">Cadastrar</button>
        <button v-if="props.closeModal" v-on:click="() => {if (props.closeModal) props.closeModal()}">Cancelar</button>
    </div>
</template>


<style scoped>
    .product--form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product--form-input {
        
    }


    .product--form-input__active {
        display: flex;
        gap: 10px;
    }
</style>