<script setup lang="ts">
  import { ref } from 'vue';
  import Modal from './components/Modal.vue'
  import ClientsView from './view/ClientsView.vue';
  import ProductsView from './view/ProductsView.vue';
  import Register from './components/Register.vue';


  const showModal = ref(false);

  const actualView = ref('clients');

  const changeView = (val: string) => {
    actualView.value = val
  }

  const openModal = () => {
    showModal.value = true;
  }
  const closeModal = () => {
    showModal.value = false;
  }
</script>

<template>
  <nav>
    Data Stone
  </nav>
  <header>
    Header
  </header>
  <button v-on:click="() => changeView('clients')">Clientes</button>
  <button v-on:click="() => changeView('products')">Produtos</button>
  <button v-on:click="openModal">Adicionar</button>
  <ClientsView v-if="actualView === 'clients'" />
  <ProductsView v-if="actualView === 'products'" />
  <Modal :is-open="showModal">
    <div>
      <Register :close-modal="closeModal" />
    </div>
  </Modal>
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