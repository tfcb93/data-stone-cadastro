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
    <v-toolbar density="compact">
      <v-toolbar-title class="d-none d-sm-flex">
        Cadastro
      </v-toolbar-title>
      <v-btn text="Clientes" @:click="() => changeView('clients')" variant="flat" :class="{'bg-primary': actualView == 'clients'}"></v-btn>
      <v-btn text="Produtos" @:click="() => changeView('products')" variant="flat" class="ml-2" :class="{'bg-primary': actualView == 'products'}"></v-btn>
      <v-spacer></v-spacer>
      <Register />
    </v-toolbar>
    <v-container>
      <v-col md="12">
        <v-row justify="center">
          <ClientsView v-if="actualView === 'clients'" />
          <ProductsView v-if="actualView === 'products'" />
        </v-row>
      </v-col>
    </v-container>
</template>

<style scoped>
</style>