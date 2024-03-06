<script setup lang="ts">
import { useClientsStore } from '../stores/clients';
import { ClientType } from '../types';


    const state = useClientsStore();

</script>

<template>
    <div v-if="state.clients.length <= 0">
        Não há clientes cadastrados
    </div>
    <div v-else v-for="(client, index) in state.clients">
        {{ client.name }}
    </div>

</template>

<style scoped>
</style>