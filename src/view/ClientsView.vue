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

    const store = useClientsStore();

</script>

<template>
    <v-container v-if="store.clients.length <= 0">
        <v-row class="my-8" justify="center">
            <v-sheet class="text-h5">
                Não há clientes cadastrados
            </v-sheet>
        </v-row>
    </v-container>
    <v-container>
        <v-sheet class="text-h4 px-8">
                Clientes
            </v-sheet>
        <v-list lines="two">
            <v-list-item
                v-for="(client, index) in store.clients"
                :key="client.id"
            >
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
                <ClientCard v-else
                    :client="client"
                    :open-editing="() => openEditing(client.id!)"
                    :delete-client="() => store.remove(client.id!)"
                />
            </v-list-item>
        </v-list>
    </v-container>

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