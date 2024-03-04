<script setup lang="ts">
    import { ref } from 'vue';
    import Cliente from './Cliente.vue';
    import Produto from './Produto.vue';

    enum screenTypeEnum {
        CLIENTE,
        PRODUTO
    }

    const screenType = ref<screenTypeEnum>(screenTypeEnum.CLIENTE);
</script>


<template>
    <div class="cadastro">
        <div class="cadastro--header">
            <button @click="screenType = screenTypeEnum.CLIENTE">Cliente</button>
            <button @click="screenType = screenTypeEnum.PRODUTO">Produto</button>
        </div>
        <div class="cadastro--form-container">
            <Cliente v-if="screenType === screenTypeEnum.CLIENTE" />
            <Produto v-else />
        </div>
    </div>
</template>

<style scoped>
.cadastro {
    border: 1px solid black;
    border-radius: 4px;
    min-width: 300px;
    min-height: 300px;
    background-color: white;
    box-shadow: 0px 5px 1px black;

}

.cadastro--header {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    gap: 25px;
}
</style>