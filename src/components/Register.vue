<script setup lang="ts">
    import { ref } from 'vue';
    import Client from './Client.vue';
    import Product from './Product.vue';
    import { registerEnum } from '../enum';

    defineProps<{
        closeModal?:any
    }>();


    const screenType = ref<registerEnum>(registerEnum.CLIENTE);
</script>


<template>
    <div class="register">
        <div class="register--header">
            <h3>Cadastro</h3>
            <button v-if="closeModal" class="register--close-button" v-on:click="closeModal">X</button>
        </div>
        <div class="register--selector">
            <button @click="screenType = registerEnum.CLIENTE">Cliente</button>
            <button @click="screenType = registerEnum.PRODUTO">Produto</button>
        </div>
        <div class="register--form-container">
            <Client v-if="screenType === registerEnum.CLIENTE" :close-modal="closeModal" />
            <Product v-else />
        </div>
    </div>
</template>

<style scoped>
.register {
    border: 1px solid black;
    border-radius: 4px;
    min-width: 300px;
    min-height: 300px;
    background-color: white;
    box-shadow: 0px 5px 1px black;

}

.register--header {
    position: relative;
    display: flex;
    justify-content: center;
}

.register--close-button {
    position: absolute;
    top: 30%;
    right: 8px;
    text-align: center;
    font-size: 10px;
}

.register--selector {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    gap: 25px;
}
</style>