<script setup lang="ts">
    import { ref } from 'vue';
    import Client from './Client.vue';
    import Product from './Product.vue';

    enum screenTypeEnum {
        CLIENTE,
        PRODUTO
    }

    const screenType = ref<screenTypeEnum>(screenTypeEnum.CLIENTE);
</script>


<template>
    <div class="register">
        <div class="register--header">
            <button @click="screenType = screenTypeEnum.CLIENTE">Cliente</button>
            <button @click="screenType = screenTypeEnum.PRODUTO">Produto</button>
        </div>
        <div class="register--form-container">
            <Client v-if="screenType === screenTypeEnum.CLIENTE" />
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
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    gap: 25px;
}
</style>./Client.vue./Product.vue