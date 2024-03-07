<script setup lang="ts">
    import { ref } from 'vue';
    import ClientForm from './ClientForm.vue';
    import ProductForm from './ProductForm.vue';
    import { registerEnum } from '../enum';

    const screenType = ref<registerEnum>(registerEnum.CLIENTE);

</script>

<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{props: activatorProps}">
          <v-btn
            v-bind="activatorProps"
            text="Adicionar"
            variant="flat"
          ></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card title="Cadastro">
            <v-card-actions>
                <v-btn
                    text="Cliente"
                    @click="screenType = registerEnum.CLIENTE"
                    :active="screenType === registerEnum.CLIENTE"
                    color="primary"
                ></v-btn>
                <v-btn
                    text="Produto"
                    @click="screenType = registerEnum.PRODUTO"
                    :active="screenType === registerEnum.PRODUTO"
                    color="primary"
                ></v-btn>
                <v-spacer></v-spacer>
                <v-btn
                icon="$close"
                @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            <ClientForm v-if="screenType === registerEnum.CLIENTE" :close-modal="() => isActive.value = false" />
            <ProductForm v-else :close-modal="() => isActive.value = false" />
        </v-card>
        </template>
      </v-dialog>
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
</style>./ClientForm.vue./ProductForm.vue