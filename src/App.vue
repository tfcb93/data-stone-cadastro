<script setup lang="ts">
  import { ref } from 'vue';
  import Modal from './components/Modal.vue'
  import ClientsView from './view/ClientsView.vue';
  import Register from './components/Register.vue';


  const showModal = ref(false);

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
  <button>Clientes</button>
  <button>Produtos</button>
  <button v-on:click="openModal">Adicionar</button>
  <ClientsView />
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