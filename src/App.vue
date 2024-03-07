<script setup lang="ts">
  import { ref } from 'vue';
  import NavBar from './components/NavBar.vue';
  import Modal from './components/Modal.vue';
  import ClientsView from './view/ClientsView.vue';
  import ProductsView from './view/ProductsView.vue';
  import Register from './components/Register.vue';


  const showModal = ref(false);

  const actualView = ref('clients');

  const changeView = (val: string) => {
    actualView.value = val
  }
  
</script>

<template>
  <NavBar />
  <header>
    Header
  </header>
  <button v-on:click="() => changeView('clients')">Clientes</button>
  <button v-on:click="() => changeView('products')">Produtos</button>
  <Register />
  <!-- <button v-on:click="openModal">Adicionar</button> -->
  <ClientsView v-if="actualView === 'clients'" />
  <ProductsView v-if="actualView === 'products'" />
  <!-- <Modal :is-open="showModal">
  </Modal> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>