<script setup lang="ts">
import { ref } from 'vue';
import { useClientsStore } from '../stores/clients';
import ClientCard from '../components/ClientCard.vue';
import ClientEdit from '../components/ClientEdit.vue';


    const isEditing = ref<null|string>(null);

    const openEditing = (id: string) => {
        isEditing.value = id;
    }

    const closeEditing = () => {
        isEditing.value = null;
    }

    const state = useClientsStore();

</script>

<template>
    <div v-if="state.clients.length <= 0">
        Não há clientes cadastrados
    </div>
    <div v-else v-for="(client, index) in state.clients">
        <div class="clientsView--client-container">
        <ClientEdit
            v-if="isEditing === client.id"
            :client-name="client.name"
            :client-document="client.document"
            :client-telephone="client.telephone"
            :client-email="client.email"
            :client-active="client.active"
            :id="client.id!"
            :close-editing="closeEditing"
        />
            <ClientCard v-else :client="client"/>
            <div v-if="!isEditing" class="clientsView--client-options">
                <button v-on:click="() => openEditing(client.id!)">Editar</button>
                <button v-on:click="() => state.remove(client.id!)">Excluir</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
.clientsView--client-container {
    border: 1px solid black;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
}

.clientsView--client-container__title {
    font-weight: regular;
}

.clientsView--client-options {
    display: flex;
    flex-direction: column;
}

.clientsView--client-container__data {
    font-weight: bold;
}
</style>