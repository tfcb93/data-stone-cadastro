<script setup lang="ts">
    import { ref } from 'vue';
    import ClientForm from './ClientForm.vue';
    import ProductForm from './ProductForm.vue';
    import { registerEnum } from '../enum';

    const screenType = ref<registerEnum>(registerEnum.CLIENTE);

</script>

<template>
    <v-dialog max-width="500" transition="fade-transition">
        <template v-slot:activator="{props: activatorProps}">
          <v-btn
            v-bind="activatorProps"
            text="Adicionar"
            variant="flat"
          ></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="ma-2 pa-4">
            <v-card-title>
                Cadastro
            </v-card-title>
            <v-card-actions>
                <v-btn
                    text="Cliente"
                    @click="screenType = registerEnum.CLIENTE"
                    :active="screenType === registerEnum.CLIENTE"
                    color="primary"
                    variant="flat"
                ></v-btn>
                <v-btn
                    text="Produto"
                    @click="screenType = registerEnum.PRODUTO"
                    :active="screenType === registerEnum.PRODUTO"
                    color="primary"
                    variant="flat"
                ></v-btn>
            </v-card-actions>
            <ClientForm v-if="screenType === registerEnum.CLIENTE" :close-modal="() => isActive.value = false" />
            <ProductForm v-else :close-modal="() => isActive.value = false" />
        </v-card>
        </template>
      </v-dialog>
</template>

<style scoped>
</style>