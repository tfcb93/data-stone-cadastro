<script setup lang="ts">
  import { ref } from 'vue';
  import ClientsView from './view/ClientsView.vue';
  import ProductsView from './view/ProductsView.vue';
  import Register from './components/Register.vue';

  const actualView = ref('clients');

  const changeView = (val: string) => {
    actualView.value = val
  }
  
</script>

<template>
    <v-toolbar title="Cadastro" density="compact">
      <v-btn text="Clientes" @:click="() => changeView('clients')" variant="flat"></v-btn>
      <v-btn text="Produtos" @:click="() => changeView('products')" variant="flat" class="ml-2"></v-btn>
      <v-spacer></v-spacer>
      <Register />
    </v-toolbar>
    <ClientsView v-if="actualView === 'clients'" />
    <ProductsView v-if="actualView === 'products'" />
</template>

<style scoped>
</style>